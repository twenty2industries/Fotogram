/* let myAlbum = Array.from(document.querySelectorAll('.photoAlbumInput'));

myAlbum.addEventListener("click", dialogListener);

function dialogListener () {
  console.log(myAlbum);
  }
 */


let myAlbum = Array.from(document.querySelectorAll('.photoAlbumInput'));

for (let index = 0; index < myAlbum.length; index++) {
  const element = myAlbum[index];
  element.addEventListener("click",logOutTester);
  console.log(element);
}

function logOutTester(event){
  console.log(event.target);
}