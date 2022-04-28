chrome.runtime.onInstalled.addListener(() => {
    console.log('Loaded Extension');
});

let adobeTarget = {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    adobeTarget[sender.tab.id] = message.target || null;
    chrome.tabs.sendMessage(tabs[0].id, { target: adobeTarget }, function (response) {
    });
});

