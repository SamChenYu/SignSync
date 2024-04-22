// Injected into YouTube pages
/*
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
*/



// content.js

let lastSubtitles = null; // Variable to store the last extracted subtitles

// Function to extract subtitles
function extractSubtitles() {
    // Find the subtitle element on the YouTube page
    const subtitleElement = document.querySelector('.ytp-caption-segment');

    // Check if subtitles are present
    if (subtitleElement) {
        // Extract text content of the subtitle element
        const subtitleText = subtitleElement.textContent.trim();
        
        // Return the extracted subtitle text
        return subtitleText;
    } else {
        // Return null if subtitles are not found
        return null;
    }
}

// Function to send subtitles to the background script if they've changed
function sendSubtitlesToBackground() {
    // Extract subtitles
    const subtitles = extractSubtitles();
    
    // Check if the extracted subtitles are different from the last ones
    if (subtitles !== lastSubtitles) {
        // Update lastSubtitles with the current subtitles
        lastSubtitles = subtitles;
        
        // Send extracted subtitles to the background script
        chrome.runtime.sendMessage({ subtitles: subtitles });
    }
}

// Set up an interval to continuously check for subtitle changes
const intervalId = setInterval(sendSubtitlesToBackground, 1000); // Adjust interval as needed (e.g., every second)

// Stop the interval when the YouTube page is unloaded
window.addEventListener('unload', function() {
    clearInterval(intervalId);
});
