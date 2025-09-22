const speeds = [
  0.25, 0.5, 0.75, 1,
  1.25, 1.5, 1.75, 2,
  2.25, 2.5, 2.75, 3
];

const slider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const resetBtn = document.getElementById('resetBtn');

// Send speed to current active tab
function applySpeed(index) {
  const speed = speeds[index];
  speedValue.textContent = speed + 'x';

  // Save to storage
  chrome.storage.local.set({ lastSpeedIndex: index });

  // Send to content script
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, { speed });
    }
  });
}

// On slider input
slider.addEventListener('input', () => {
  const index = parseInt(slider.value, 10);
  applySpeed(index);
});

// On reset button
resetBtn.addEventListener('click', () => {
  slider.value = '3';
  applySpeed(3);
});

// On popup load
window.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('lastSpeedIndex', data => {
    const index = typeof data.lastSpeedIndex === 'number' ? data.lastSpeedIndex : 3;
    slider.value = index.toString();
    speedValue.textContent = speeds[index] + 'x';

    applySpeed(index);
  });
});
