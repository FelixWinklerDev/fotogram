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
          <img id="mainImages" tabindex="0" onclick="openDialog(${[index]})" src="${myImages[index]}" alt="">
    `;
  }
}

function openDialog(rot) {
  const dialogRef = document.getElementById('imageOverlay');
  dialogRef.showModal();
  dialogRef.classList.add('opened');
  imgTravel(rot);
}

function closeDialog() {
  const dialogRef = document.getElementById('imageOverlay');
  dialogRef.classList.remove('opened');
  dialogRef.close();
}

let overlayImages = [
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

function imgTravel(rot) {
  console.log(1);
  let overlayContainer = document.getElementById('showImage');
  overlayContainer.innerHTML = /*html*/ `
        <img id="mainImagesInOverlay" src="${overlayImages[rot]}" alt="">
        `;
}

//function imgTravel(index) {
//  let placeholder = document.getElementById('showImage');
//  placeholder.innerHTML =
//    /*html*/
//    `<img src="${myImages[index]}" alt="">;
//  `;
//}
