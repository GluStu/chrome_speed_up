chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.speed !== undefined) {
    const mediaElements = document.querySelectorAll('video, audio');
    mediaElements.forEach(element => {
      element.playbackRate = request.speed;
    });
  }
});
