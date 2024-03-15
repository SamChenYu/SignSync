chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        var url = tab.url;
        console.log("URL of active tab:", url);
        openTest(url);
    });
});


const openTest = (inputURL) => {

    const regex = /https:\/\/www\.youtube\.com\/watch\?v=/;

    if (inputURL.match(regex)) {
        console.log('url matches');
        // call python script
        fetchSubtitles(inputURL);
    } else {
        console.log('url does not match');
    }
}


// Example code to fetch subtitles from the local server
function fetchSubtitles(videoUrl) {
    fetch('http://127.0.0.1:5000/extract-subtitles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ video_url: videoUrl })
    })
    .then(response => response.json())
    .then(data => {
        // Process subtitles data
        console.log(data.subtitles);
    })
    .catch(error => {
        console.error('Error fetching subtitles:', error);
    });
}



