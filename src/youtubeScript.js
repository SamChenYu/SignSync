

let lastSubtitles = null; // Variable to store the last extracted subtitles

// Function to extract subtitles
function extractSubtitles() {
    // Find the subtitle element on the YouTube page
    const subtitleElement = document.querySelector('.ytp-caption-segment');

    // Check if subtitles are present
    if (subtitleElement) {



        console.log(subtitleElement);
        // Get all subtitle elements within the container
        const subtitleElements = document.querySelectorAll('.ytp-caption-segment');

        // Initialize an array to store individual subtitle lines
        let subtitles = [];

        // Iterate over each subtitle element
        subtitleElements.forEach(subtitleElement => {
            // Extract text content of the subtitle element
            const subtitleText = subtitleElement.textContent.trim();
            
            // Push the extracted subtitle text to the array
            subtitles.push(subtitleText);
        });
        
        // Join the individual subtitle lines into a single string with line breaks
        const subtitlesText = subtitles.join('\n');

        // Return the extracted subtitle text
        return subtitlesText;










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
const intervalId = setInterval(sendSubtitlesToBackground, 150); // Adjust interval as needed (e.g., every 1/3 second)

// Stop the interval when the YouTube page is unloaded
window.addEventListener('unload', function() {
    clearInterval(intervalId);
});
