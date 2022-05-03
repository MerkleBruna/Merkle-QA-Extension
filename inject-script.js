// var port = chrome.runtime.connect({
//     extensionId: string,
//     connectInfo: object
// })

// window.addEventListener("message", (event) => {
//   // We only accept messages from ourselves
//   if (event.source != window) {
//     return;
//   }

//   if (event.data.type && (event.data.type == "FROM_PAGE")) {
//     console.log("Content script received: " + event.data.text);
//     port.postMessage(event.data.text);
//   }
// }, false);

// document.getElementById("switch").addEventListener("click", () => {
//     window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
//   }, false);


function checkWindowData() {
    let main = {}
    // main.performance = JSON.parse(JSON.stringify(window.performance)) || null;
    main.adobeTarget = JSON.parse(JSON.stringify(adobe.target)) || null;
    return main
}

setInterval(() => {
    console.log("message interval running");
    let target = checkWindowData();
    console.log(target);
    window.postMessage({ type: "FROM_PAGE", target }, "*")
}, 5000);
