// Injected into YouTube pages
const player = document.querySelector('video');

player.addEventListener('play', () => {
    chrome.runtime.sendMessage({ action: 'videoPlay' });
});

player.addEventListener('pause', () => {
    chrome.runtime.sendMessage({ action: 'videoPause' });
});

player.addEventListener('seeked', () => {
    chrome.runtime.sendMessage({ action: 'videoSeek', currentTime: player.currentTime });
});
