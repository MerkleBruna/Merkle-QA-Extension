function checkWindowData() {
  let main = {}
  // main.performance = JSON.parse(JSON.stringify(window.performance)) || null;
  main.adobeTarget = JSON.parse(JSON.stringify(adobe.target)) || null
  return main
}

setInterval(() => {
  console.log('message interval running')
  let target = checkWindowData()
  console.log(target)
  window.postMessage({ type: 'FROM_PAGE', target }, '*')
}, 5000)
