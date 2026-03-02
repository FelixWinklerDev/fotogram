let myImages = [
  './img/pic1.jpg',
  './img/pic10.jpg',
  './img/pic11.jpg',
  './img/pic12.jpg',
  './img/pic2.jpg',
  './img/pic3.png',
  './img/pic4.jpg',
  './img/pic5.jpg',
  './img/pic6.jpg',
  './img/pic7.jpg',
  './img/pic8.jpg',
  './img/pic9.jpg',
];

function renderPictures(array) {
  let container = document.getElementById('photo_gallery');

  for (let index = 0; index < myImages.length; index++) {
    container.innerHTML += /*html*/ `
          <button aria-haspopup="dialog" aria-controls="imageOverlay" id="image_button" onclick="openDialog()"><img class="mainImages" src="${myImages[index]}" alt="pictures"></button>
    `;
    console.log(renderPictures);
  }
}

let dialogRef = document.getElementById('imageOverlay');

function openDialog() {
  dialogRef.showModal();
}

function closeDialog() {
  dialogRef.close();
}
