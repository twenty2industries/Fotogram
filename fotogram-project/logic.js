let myAlbum = Array.from(document.querySelectorAll(".photoAlbumInput"));
const mainSection = document.getElementById("mainSection");
const collageSection = document.getElementById("collageArea");
let duplicateElements = [];
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
  const eventDuplicate = event.target.cloneNode(true);
  eventDuplicate.classList.add("overlayCollage");
  contentRef.appendChild(eventDuplicate);
  duplicateElements.push(eventDuplicate);
  event.stopPropagation();
}

function removeDuplicate(event) {
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

//    toggleId.classList.add('d_none');
//      toggleId.classList.remove('d_none');
