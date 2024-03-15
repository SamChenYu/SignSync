const openTest = (inputURL) => {

    const regex = /https:\/\/www\.youtube\.com\/watch\?v=/;

    if (inputURL.match(regex)) {
        console.log('url matches');
        // call python script
    } else {
        console.log('url does not match');
    }
}

chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        var url = tab.url;
        console.log("URL of active tab:", url);
        openTest(url);
    });
});

