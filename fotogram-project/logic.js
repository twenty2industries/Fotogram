let myAlbum = Array.from(document.querySelectorAll(".photoAlbumInput"));
const mainSection = document.getElementById("mainSection");
let duplicateElement = "";

for (let index = 0; index < myAlbum.length; index++) {
  const element = myAlbum[index];
  element.addEventListener("click", toggleOverlay);
}

function toggleOverlay(event) {
  const eventDuplicate = event.target.cloneNode(true);
  eventDuplicate.classList.toggle("overlayCollage");
  contentRef.appendChild(eventDuplicate);
  duplicateElement = eventDuplicate;
  console.log(duplicateElement);
  event.stopPropagation();
}

function closeOverlay(event) {
  mainSection.addEventListener("click", renderImages);
}
