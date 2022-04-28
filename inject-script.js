function checkWindowData() {
    let main = {}
    // main.performance = JSON.parse(JSON.stringify(window.performance)) || null;
    main.adobeTarget = adobe.target || null;
    return main
}

setInterval(() => {
    console.log("message interval running");
    let target = checkWindowData();
    window.postMessage({ type: "FROM_PAGE", target })
}, 500);