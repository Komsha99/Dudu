const header = document.querySelector('header');
const hero = document.querySelector('.hero');

const options = {
    root: null, 
    threshold: 0.1, 
  };

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.classList.remove('changeColor');

        } else {
            header.classList.add('changeColor');
        }
    })
}, options);

observer.observe(hero);



let carousel = document.querySelector(".carousel");
let btns = document.querySelectorAll(".wrapper i");
let carouselChildren = [...carousel.children];
let wrapper = document.querySelector(".wrapper");


let cardWidth = carousel.querySelector(".card").offsetWidth;
let isDragging = false,
  startX,
  startScrollLeft,
  isAutoPlay = true,
  timeoutId;


let cardsPerView = Math.round(carousel.offsetWidth / cardWidth);

carouselChildren
  .slice(-cardsPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildren.slice(0, cardsPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -cardWidth : cardWidth;
  });
});

let dragStart = (e) => {
  isDragging = true;

  carousel.classList.add("dragging");

  
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

let dragging = (e) => {

  if (!isDragging) return;

  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

let dragStop = () => {
  isDragging = false;

  carousel.classList.remove("dragging");
};

let infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
