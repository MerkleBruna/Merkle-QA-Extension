const injectScript = (file_path, tag) => {
    console.log("Script injected");
    const node = document.getElementsByTagName(tag)[0]
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
};

injectScript(chrome.runtime.getURL('inject-script.js'), 'body');

window.addEventListener('message', (e) => {
    if (e.data.type && e.data.type === 'FROM_PAGE') {
        console.log("The event back from the page", e);
        // chrome.runtime.sendMessage({ essential: e.data.essential });
    }
}, false);


// window.addEventListener('DOMContentLoaded', () => {
const bg = chrome.extension.getBackgroundPage();
//     console.log("bg", bg);
// async function getCurrentTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     console.log(tab.id);
//     return tab.id;
// };
//     const currentadobeData = bg.adobeData[getCurrentTab()]
//     console.log("Should be correct", currentadobeData);
// });


const toggleButton = () => {
    let button = document.getElementById("switch");
    button.addEventListener('click', () => {
        if (button.value == "true") {
            button.value = "false";
        }
        else if (button.value == "false") {
            button.value = "true";
        }

    })
};


const fireMbox = () => {
    adobe.target.getOffer({
        "mbox": "merkle-qacam",
        "params": {
            "qa-mode": "true"
        },
        "success": function (offer) {
            adobe.target.applyOffer({
                "mbox": "merkle-qacam",
                "offer": offer
            });
        },
        "error": function (status, error) {
            console.log('Error', status, error);
        }
    });
};
