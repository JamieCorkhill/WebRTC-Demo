'use strict';

// Video - Forcing the front camera. Change the property to { exact: 'environment' } for back camera.
const mediaStreamConstraints = {
  audio: false,
  video: {
    facingMode:  { exact: "user" }
  }
};

// Get the video element from the DOM.
const localVideo = document.querySelector('video');

// Handles success by adding the MediaStream to the video element.
const gotLocalMediaStream = mediaStream => {
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
const handleLocalMediaStreamError = error => {
  console.log('An error occurred invoking navigator.mediaDevices.getUserMedia: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
