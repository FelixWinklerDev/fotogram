let myImages = [
  '../mypic1.jpg',
  'pic10.jpg',
  'pic11.jpg',
  'pic12.jpg',
  'pic2.jpg',
  'pic3.png',
  'pic4.jpg',
  'pic5.jpg',
  'pic6.jpg',
  'pic7.jpg',
  'pic8.jpg',
  'pic9.jpg',
];

function renderPictures(array) {
  let container = document.getElementById('photo_gallery');

  for (let index = 1; index <= 12; index++) {
    container.innerHTML += /*html*/ `
          <img src="${myImages[index - 1]}" alt="">
     
    `;
  }
}
