// Discrete speeds from 0.25x up to 3x
const speeds = [
    0.25, 0.5, 0.75, 1,
    1.25, 1.5, 1.75, 2,
    2.25, 2.5, 2.75, 3
  ];
  
  const slider = document.getElementById('speedSlider');
  const speedValue = document.getElementById('speedValue');
  const resetBtn = document.getElementById('resetBtn');
  
  // Apply the speed and remember the index in storage
  function updateSpeed(index) {
    const speed = speeds[index];
    speedValue.textContent = speed + 'x';
  
    // Save the new index to Chrome storage
    chrome.storage.local.set({ lastSpeedIndex: index });
  
    // Send the new speed to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { speed: speed });
    });
  }
  
  // On slider input, update speed
  slider.addEventListener('input', () => {
    const index = parseInt(slider.value, 10);
    updateSpeed(index);
  });
  
  // On reset, set speed to 1x (which is at index 3)
  resetBtn.addEventListener('click', () => {
    slider.value = '3';
    updateSpeed(3);
  });
  
  // When popup loads, restore the last chosen speed from storage
  window.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('lastSpeedIndex', data => {
      // Default to index 3 if nothing is stored
      const index = (typeof data.lastSpeedIndex === 'number') ? data.lastSpeedIndex : 3;
      slider.value = index.toString();
      speedValue.textContent = speeds[index] + 'x';
    });
  });  