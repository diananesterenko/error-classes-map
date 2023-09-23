//-----------------------1------------------------
const btn1 = document.querySelector(".btn1");
const onCliclBtn1Handler = function (e) {
  btn1.textContent = "Task1 Completed";
};
btn1.addEventListener("click", onCliclBtn1Handler);
//-----------------------2------------------------
const btn2 = document.querySelector(".btn2");
const onCliclBtn2Handler = function (e) {
  btn2.style.backgroundColor = "red";
};
btn2.addEventListener("click", onCliclBtn2Handler);
//-----------------------3------------------------
const img3 = document.querySelector(".img3");
const onCliclImg3Handler = function (e) {
  img3.src =
    "https://w-dog.ru/wallpapers/1/88/479630592171246/list-rozovyj-filialy-serdce-derevo.jpg";
};
img3.addEventListener("mouseenter", onCliclImg3Handler);
//-------------------------4-----------------------
const slides = [
  {
    src: "https://windows10spotlight.com/wp-content/uploads/2021/06/ef3f000b0cb7e20ea7d3cc8f7d5d97c8.jpg",
    alt: "landscape1",
    description: "Ukraine",
  },
  {
    src: "https://www.planetware.com/wpimages/2020/02/sweden-in-pictures-beautiful-places-to-photograph-kiruna.jpg",
    alt: "landscape2",
    description: "Sweden",
  },
  {
    src: "https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg",
    alt: "landscape3",
    description: "Switzerland",
  },
  {
    src: "https://cdn.outsideonline.com/wp-content/uploads/2019/08/28/norway-trolltunga-travel_h.jpg?crop=25:14&width=500&enable=upscale",
    alt: "landscape4",
    description: "Norway",
  },
];
let currSlideIndex = 0;

const sliderImg = document.querySelector(".slider-img-main");
const sliderImgPrev = document.querySelector(".slider-img-prev");
const sliderImgNext = document.querySelector(".slider-img-next");
const sliderDesc = document.querySelector(".description");
updateSlideImg(currSlideIndex);

const [prevBtn, nextBtn] = document.querySelectorAll(".navBtn");

function nextSlideHandler() {
  console.log("next");
  currSlideIndex = (currSlideIndex + 1) % slides.length;
  updateSlideImg(currSlideIndex);
}
function prevSlideHandler() {
  console.log("prev");
  currSlideIndex = (currSlideIndex - 1 + slides.length) % slides.length;
  updateSlideImg(currSlideIndex);
}

function updateSlideImg(currSlideIndex) {
  sliderImg.src = slides[currSlideIndex].src;
  sliderImg.alt = slides[currSlideIndex].alt;
  sliderDesc.textContent = slides[currSlideIndex].description;
  sliderImgNext.src = slides[(currSlideIndex + 1) % slides.length].src;
  sliderImgPrev.src =
    slides[(currSlideIndex - 1 + slides.length) % slides.length].src;
}

nextBtn.addEventListener("click", nextSlideHandler);
prevBtn.addEventListener("click", prevSlideHandler);
