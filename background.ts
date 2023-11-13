export {}
 
console.info(
  "Running Service Worker."
)

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  