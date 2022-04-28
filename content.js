let actualCode = `javascript: 
    adobe.target.trackEvent({
        "mbox": "merkle-qacam",
        "params": {
            "qa-mode": "true"
        }
    });
`;

let script = document.createElement('script');
script.textContent = actualCode;
(document.head || document.documentElement).appendChild(script);
script.remove();