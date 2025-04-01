const collageSection = document.getElementById("main_Section");
const overlayDisplay = document.getElementById("big_Overlay");
const targetPicture = document.getElementById("target_Picture");
let currentIndex = 0; // hier wird mit zahl gearbeitet nicht mit leeren Array

const pictureCollection = [
  "picture1.png",
  "picture2.png",
  "picture3.png",
  "picture4.png",
  "picture5.png",
  "picture6.png",
  "picture7.png",
  "picture8.png",
  "picture9.png",
  "picture10.png",
  "picture11.png",
  "picture12.png",
];

function renderImg() {
  for (let index = 0; index < pictureCollection.length; index++) {
    collageSection.innerHTML += renderPicture(index);
  }

  document.querySelectorAll(".photoAlbumInput").forEach((element) => {
    element.addEventListener("click", toggleOverlay);
  });
}

function renderPicture(index) {
  return `<img class="photoAlbumInput" src="collagePictures/${pictureCollection[index]}">`;
}

function toggleOverlay(event) {
  const clickedSrc = event.target.src;
  currentIndex = pictureCollection.indexOf(clickedSrc.replace("collagePictures/", "")); //speichert den aktuellen Index
  targetPicture.innerHTML = `<img class="targetPicture" src="${clickedSrc}">`;
  overlayDisplay.classList.remove("d_none");
}

function closeOverlay() {
  overlayDisplay.classList.add("d_none");
}


function moveForward() {
  currentIndex++;
  if (currentIndex >= pictureCollection.length) {
    currentIndex = 0; 
  }
  targetPicture.innerHTML = `<img class="targetPicture" src="collagePictures/${pictureCollection[currentIndex]}">`;
}

function moveBackward() {
  currentIndex--; 
  if (currentIndex < 0) {
    currentIndex = pictureCollection.length - 1; 
  }
  targetPicture.innerHTML = `<img class="targetPicture" src="collagePictures/${pictureCollection[currentIndex]}">`;
}