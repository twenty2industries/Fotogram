let myAlbum = Array.from(document.querySelectorAll(".photoAlbumInput"));
const mainSection = document.getElementById("mainSection");
const collageSection = document.getElementById("collageArea");
let duplicateElements = [];

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
  const eventDuplicate = event.target.cloneNode(true);
  eventDuplicate.classList.add("overlayCollage");
  contentRef.appendChild(eventDuplicate);
  duplicateElements.push(eventDuplicate);
  event.stopPropagation();
}

function removeDuplicate(event) {
  if (!contentRef.contains(event.target)) {
    removeAllOverlays();
  } else {
    if (!duplicateElements.includes(event.target)) {
      removeAllOverlays();
    }
  }
}

mainSection.addEventListener("click", removeDuplicate);
collageSection.addEventListener("click", removeDuplicate);
