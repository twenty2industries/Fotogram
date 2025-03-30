/* 
Versuch 1: Ein Array deklariert mit myAlbum = definiert durch eine nodelist welche in ein vollwertiges array umgewandelt wird.

let myAlbum = Array.from(document.querySelectorAll('.photoAlbumInput'));

myAlbum.addEventListener("click", dialogListener);

function dialogListener () {
  console.log(myAlbum);
  }
 */

let myAlbum = Array.from(document.querySelectorAll(".photoAlbumInput"));

for (let index = 0; index < myAlbum.length; index++) {
  const element = myAlbum[index];
  element.addEventListener("click", toggleOverlay);
  console.log(element);
}

function toggleOverlay(event) {
  event.target.classList.toggle("overlayCollage");
  console.log(event.target);
}
