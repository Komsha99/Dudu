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

$(document).ready(function(){
  var $carousel = $('.carousel').slick({
    infinite: true,          
    slidesToShow: 3,         
    slidesToScroll: 1,       
    autoplay: true,          
    autoplaySpeed: 2000,     
    arrows: true,            
    draggable: true,         
    prevArrow: '#left',      
    nextArrow: '#right'      
  });


$carousel.on('afterChange', function(event, slick, currentSlide){
  $carousel.slick('slickPlay');
});

$carousel.on('mousedown', function() {
  $carousel.slick('slickPause');
});

$carousel.on('mouseup mouseleave', function() {
  $carousel.slick('slickPlay');
});
});
