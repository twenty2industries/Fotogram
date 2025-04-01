let myAlbum = Array.from(document.querySelectorAll(".photoAlbumInput"));
const mainSection = document.getElementById("mainSection");
const collageSection = document.getElementById("collageArea");
let duplicateElements = [];
let currentIndex = null;
const toggleId = document.getElementById("buttonArea");

for (let index = 0; index < myAlbum.length; index++) {
  const element = myAlbum[index];
  element.addEventListener("click", toggleOverlay);
}

function removeAllOverlays() {
  duplicateElements.forEach((element) => element.remove());
  duplicateElements = [];
}

function toggleOverlay(event) {
  removeAllOverlays();
  currentIndex = myAlbum.indexOf(event.target);
  const eventDuplicate = event.target.cloneNode(true);
  eventDuplicate.classList.add("overlayCollage");
  contentRef.appendChild(eventDuplicate);
  duplicateElements.push(eventDuplicate);
  event.stopPropagation();
}

function nextPicture() {
  removeAllOverlays(); // reset ist immer notwendig
  currentIndex = (currentIndex + 1) % myAlbum.length;
  const nextImage = myAlbum[currentIndex].cloneNode(true);
  nextImage.classList.add("overlayCollage");
  contentRef.appendChild(nextImage);
  duplicateElements.push(nextImage);
}

function previousPicture() {
  removeAllOverlays(); // reset ist immer notwendig
  currentIndex = (currentIndex - 1 + myAlbum.length) % myAlbum.length;
  const prevImage = myAlbum[currentIndex].cloneNode(true);
  prevImage.classList.add("overlayCollage");
  contentRef.appendChild(prevImage);
  duplicateElements.push(prevImage);
}

function removeDuplicate(event) {
  if (toggleId.contains(event.target)) {
    return; // blocked die removeAllOverlay() ausführung notwendig
  }
  if (!contentRef.contains(event.target)) {
    removeAllOverlays();
    toggleId.classList.remove("d_none");
  } else {
    if (!duplicateElements.includes(event.target)) {
      toggleId.classList.remove("d_none");
      removeAllOverlays();
    }
  }
}

mainSection.addEventListener("click", removeDuplicate);
collageSection.addEventListener("click", removeDuplicate);

// console.log(currentIndex); // angeklickter index
// console.log(eventDuplicate); // angeklickter dom wert
// console.log(duplicateElements); // array wert mit geklicktem datentyp
// toggleId.classList.add('d_none');
// toggleId.classList.remove('d_none');
// console.log(myAlbum); //  array mit 12 datentyp länge
