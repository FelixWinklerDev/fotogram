let myImages = [
  './img/mypic1.jpg',
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

  for (let index = 1; index <= 12; index++) {
    container.innerHTML += /*html*/ `
          <img class="image_gallery" src="${myImages[index - 1]}" alt="">
     
    `;
  }
}
