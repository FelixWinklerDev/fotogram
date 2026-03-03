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
  //container.innerHTML = '';

  for (let index = 0; index < myImages.length; index++) {
    container.innerHTML += /*html*/ `
          <img id="mainImages" onclick="openDialog(${[index]})" src="${myImages[index]}" alt="">
    `;
  }
}

function openDialog(number) {
  const dialogRef = document.getElementById('imageOverlay');
  dialogRef.showModal();
  imgTravel(index);
}

function closeDialog() {
  const dialogRef = document.getElementById('imageOverlay');
  dialogRef.close();
}

function imgTravel(index) {
  let placeholder = document.getElementById('showImage');
  placeholder.innerHTML =
    /*html*/
    `<img src="myImages[index]" alt="">;
  `;
}
