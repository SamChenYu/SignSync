document.getElementById('overlayButton').addEventListener('click', () => {
    // Send a message to the content script to perform some action
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs && tabs.length > 0) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'addmedia'}, (response) => {
                if (chrome.runtime.lastError) {
                    console.error('Error:', chrome.runtime.lastError.message);
                } else {
                    console.log('Message sent successfully');
                }
            });
        } else {
            console.error('No active tabs found');
        }
    });
});
