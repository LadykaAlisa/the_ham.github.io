const hideAuthors = document.getElementsByClassName('hide-authors');
const hideAuthorsMini = document.getElementsByClassName('hide-authors-mini');
const miniCirclePhoto = Array.from(document.getElementsByClassName('mini-circle-photo'));
const loadMoreAmazing = document.getElementsByClassName('load-more-amazing');
const loadMoreHide = document.getElementsByClassName('load-more-hide');
const leftButton = document.getElementsByClassName('left');
const rightButton = document.getElementsByClassName('right');


const applyHiddenClass = (cls, length = cls.length, count = 0) => {
    for (let i = count; i < length; i++) {
        cls[i].style.display = 'none';
    }
};

applyHiddenClass(hideAuthors);
applyHiddenClass(hideAuthorsMini);

function showPeople() {
    const miniCirclePhoto = Array.from(document.getElementsByClassName('mini-circle-photo'));
    const bigPeopleBlock = Array.from(document.getElementsByClassName('authors-main-block'));
    bigPeopleBlock.forEach((value) => value.style.display = 'none');
    const dataPeople = this.getAttribute('data-people');
    const dataBigBlock = bigPeopleBlock.filter((value) => {
        return value.getAttribute('data-people') === dataPeople;
    });
    dataBigBlock[0].style.display = '';
    miniCirclePhoto.forEach((value) => value.classList.remove('mini-circle-border'));
    this.classList.add('mini-circle-border');
}

const moveLeft = () => {
    const miniImages = Array.from(document.getElementsByClassName('mini-circle-photo'));
    const currentImageIndex = miniImages.findIndex((items) => items.classList.contains('mini-circle-border'));
    const currentImage = document.getElementsByClassName('mini-circle-border');
    let prevImageIndex = currentImageIndex - 1;
    let prevImage = miniImages[prevImageIndex];
    const bigPeopleBlock = Array.from(document.getElementsByClassName('authors-main-block'));

    bigPeopleBlock.forEach((items) => items.style.display = 'none');

    if (currentImageIndex === 0) {
        miniImages.forEach((items) => items.style.display = '');
        prevImage = miniImages[miniImages.length - 1];
        prevImageIndex = miniImages.length - 1;
        currentImage[currentImageIndex].style.display = 'none';
    }
    if (prevImage.style.display === 'none') {
        prevImage.style.display = '';
        miniImages[currentImageIndex + 3].style.display = 'none';
    }
    currentImage[0].classList.remove('mini-circle-border');
    prevImage.classList.add('mini-circle-border');
    bigPeopleBlock[prevImageIndex].style.display = '';
};

const moveRight = () => {
    const miniImages = Array.from(document.getElementsByClassName('mini-circle-photo'));
    const currentImageIndex = miniImages.findIndex((items) => items.classList.contains('mini-circle-border'));
    const currentImage = document.getElementsByClassName('mini-circle-border');
    let nextImageIndex = currentImageIndex + 1;
    let nextImage = miniImages[nextImageIndex];
    const bigPeopleBlock = Array.from(document.getElementsByClassName('authors-main-block'));

    bigPeopleBlock.forEach((items) => items.style.display = 'none');

    if (currentImageIndex === (miniImages.length - 1)) {
        miniImages.forEach((items) => items.style.display = '');
        nextImage = miniImages[0];
        nextImageIndex = 0;
        currentImage[0].style.display = 'none';
    }
    if (nextImage.style.display === 'none') {
        nextImage.style.display = '';
        miniImages[currentImageIndex - 3].style.display = 'none';
    }
    currentImage[0].classList.remove('mini-circle-border');
    nextImage.classList.add('mini-circle-border');
    bigPeopleBlock[nextImageIndex].style.display = '';
};
miniCirclePhoto.forEach((value) => value.addEventListener('click', showPeople));
leftButton[0].addEventListener('click', moveLeft);
rightButton[0].addEventListener('click', moveRight);