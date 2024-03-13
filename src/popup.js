// popup.js
document.getElementById('overlayButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {command: "overlay"});
    });
  });
  