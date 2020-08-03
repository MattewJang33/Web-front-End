const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
var photoscreen = canvas.getContext('2d');
// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: true };
var photobooth = document.querySelector('.photobooth');
console.log(photobooth)
navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
video.srcObject = mediaStream;

  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
video.addEventListener('loadedmetadata', function() {
  canvas.width = 1280;
  canvas.height = 720;
});

video.addEventListener('play', () => {
  function step() {
    photoscreen.drawImage(video, 0, 0, canvas.width, canvas.height)
    requestAnimationFrame(step)
  }
  requestAnimationFrame(step);
})

function takePhoto() {


      photoscreen.drawImage(video, 0, 0, canvas.width, canvas.height)
  var dataURI = canvas.toDataURL('image/jpeg');
    var img1 = document.createElement("img");

  img1.src = dataURI;


  var a1 = document.createElement("a");
  a1.href = dataURI;
  a1.download = "image.jpeg"

  a1.appendChild(img1)
  strip.appendChild(a1);

}
