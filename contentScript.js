const injectScript = (file_path, tag) => {
    console.log("Script injected");
    const node = document.getElementsByTagName(tag)[0]
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
};

injectScript(chrome.runtime.getURL('inject-script.js'), 'body');