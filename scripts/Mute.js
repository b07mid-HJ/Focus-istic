const muteButton = document.getElementById('mute-button');

muteButton.addEventListener('click', function() {
  if (this.classList.contains('muted')) {
    // Unmute the tab
    unmuteTab();
    this.classList.remove('muted');
  } else {
    // Mute the tab
    muteTab();
    this.classList.add('muted');
  }
});

function muteTab() {
  // Get the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Get the tab's audio context
    chrome.tabCapture.capture({ audio: true }, function(stream) {
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const gainNode = audioContext.createGain();
      gainNode.gain.value = 0; // Mute the audio
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);
    });
  });
}

function unmuteTab() {
  // Get the current tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Get the tab's audio context
    chrome.tabCapture.capture({ audio: true }, function(stream) {
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const gainNode = audioContext.createGain();
      gainNode.gain.value = 1; // Unmute the audio
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);
    });
  });
}