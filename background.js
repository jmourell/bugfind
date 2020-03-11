// chrome.runtime.onInstalled.addListener(function() {
//   // chrome.storage.sync.set({ color: "#3aa757" }, function() {
//   //   console.log("The color is green.");
//   // });
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { hostEquals: "developer.chrome.com" }
//           })
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()]
//       }
//     ]);
//   });
// });
function captureCurrentTab(tab) {
  console.log("Clicked");
  chrome.tabCapture.capture({ audio: false, video: true }, localMediaStream => {
    if (localMediaStream) {
      const track = localMediaStream.getVideoTracks()[0];

      const imageCapture = new ImageCapture(track);
      imageCapture
        .grabFrame()
        .then(function capturedBitmap(bitmap) {
          console.error("Took bitmap:", bitmap);
        })
        .catch(function(error) {
          console.log("grabFrame() error: ", bitmap);
        });
    }
  });
}
chrome.browserAction.onClicked.addListener(captureCurrentTab);
