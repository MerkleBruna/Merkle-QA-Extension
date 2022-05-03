chrome.runtime.onInstalled.addListener(() => {
    console.log('Loaded Extension');
});

let adobeTarget = {};

chrome.runtime.onMessage.addListener((message, sender, response) => {
    adobeTarget[sender.tab.id] = message.target || null;
    response(tabs[0].id, { target: adobeTarget });
});

