// let captureImage = document.getElementById("captureImage");

// captureImage.onclick = function(element) {
//   console.log("Clicked");
//   chrome.tabCapture.capture({ audio: false, video: true }, localMediaStream => {
//     if (localMediaStream) {
//       const track = localMediaStream.getVideoTracks()[0];

//       console.log(track);
//       imageCapture = new ImageCapture(track);
//       imageCapture.takePhoto();
//     }
//   });

// const currentTab = chrome.tabs.getCurrent(tab => {
//   return tab;
// });
// chrome.desktopCapture.chooseDesktopMedia(
//   ["screen", "window", "tab"],
//   currentTab,
//   async streamId => {
//     const mediaStream = await window.navigator.getUserMedia(streamId);
//     console.log(mediaStream);
//   }
// );

// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   chrome.tabs.executeScript(tabs[0].id, {
//     code: 'document.body.style.backgroundColor = "' + color + '";'
//   });
// });
// };
