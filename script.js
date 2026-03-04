// an array for the images
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

// an array for the titles
let myTitles = [
  'Seelandschaft',
  'Leopardenbabys',
  'Bergaussicht',
  'eisüberwachsener Baum',
  'Anime Stadt',
  'Gewitterwolken',
  'Blaumeise',
  'Orkan vom Weltall',
  'Winterlandschaft am See',
  'Moorente',
  'Felix in nachdenklichen Nächten',
  'Schneeammer',
];

// an array for the Alt textes
let myAltTextes = [
  'eine wunderschöne Seelandschaft',
  'zwei Leopardenbabys',
  'eine schöne Bergaussicht',
  'ein eisüberwachsener Baum',
  'ein fiktives Stadtbild im Animestil',
  'Gewitterwolken',
  'eine Blaumeise',
  'Orkan vom Weltall',
  'eine Winterlandschaft am See',
  'eine Moorente',
  'ein Mensch in einer sternklaren Nacht',
  'ein Schneeammer',
];

// global index for the imgTravel function
currentIndex = 0;

// onload event which renders the Pictures in the main section
function renderPictures(array) {
  let container = document.getElementById('photo_gallery');

  for (let index = 0; index < myImages.length; index++) {
    container.innerHTML += /*html*/ `
          <img id="mainImages" tabindex="0" onclick="openDialog(${[index]})" src="${myImages[index]}" alt="${myAltTextes[index]}">
    `;
  }
}

// onclick event which opens the dialog if you click a image
function openDialog(image) {
  const dialogRef = document.getElementById('imageOverlay');
  dialogRef.showModal();
  dialogRef.classList.add('opened');
  imgTravel(image);
}

// onclick event which closing the Dialog
function closeDialog() {
  const dialogRef = document.getElementById('imageOverlay');
  dialogRef.classList.remove('opened');
  dialogRef.close();
}

// adds the image from the array in the Dialog Main section
function imgTravel(image) {
  let overlayContainer = document.getElementById('showImage');
  overlayContainer.innerHTML = imgTravelTemplate(image);
  updateCounter(image);
  updateTitle(image);
}

//adds
function imgTravelTemplate(image) {
  return `
        <img id="mainImagesInOverlay" src="${myImages[image]}" alt="${myAltTextes[image]}">
        `;
}

// adds the index in the p tag (it's working like a counter)
function updateCounter(index) {
  let counter = document.getElementById('img_counter');
  let currentNum = index + 1;
  let totalNum = myImages.length;
  counter.innerText = `${currentNum} / ${totalNum}`;
}

// adds the Title in the Dialog Header
function updateTitle(index) {
  let updateTitle = document.getElementById('image_title');
  let headerTitle = myTitles[index];
  updateTitle.innerText = `${headerTitle}`;
}

// onlick event which gave you the previous picture and jumps to the end by 1/12
function previous() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = myImages.length - 1;
  }
  imgTravel(currentIndex);
}

// onlick event which gave you the next picture and jumps to the start by 12/12
function next() {
  currentIndex++;
  if (currentIndex > myImages.length - 1) {
    currentIndex = 0;
  }
  imgTravel(currentIndex);
}
