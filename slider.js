const imgArray = [
    'img/slider/1.png',
    'img/slider/2.png',
    'img/slider/3.png',
    'img/slider/4.png',
    'img/slider/5.png',
    'img/slider/6.png',
    'img/slider/7.png',
    'img/slider/8.png'
];

const img = document.querySelector('#slider');
let i = 0;

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const slideShow = () => {
    img.src = imgArray[i];
    i = (i < imgArray.length - 1) ? i + 1 : 0;
};

const prevSlide = () => {
    i = (i > 0) ? i - 1 : imgArray.length - 1;
    img.src = imgArray[i];
};

const nextSlide = () => {
    i = (i < imgArray.length - 1) ? i + 1 : 0;
    img.src = imgArray[i];
};

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);