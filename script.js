const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const links = document.querySelectorAll('.nav-links li a, .nav-button');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    let target;
    if(this.classList.contains('nav-button')) {
      target = '#contact';
    } else {
      target = this.getAttribute('href');
    }
    const targetElement = document.querySelector(target);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

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
    slidesToShow: 4,
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

$(document).ready(function () {
	$('body').on('click', '.services-card', function(){
		var id = $(this).attr("id");
		$('.contact-inputs').children('option').each(function (key, option) {
			if(id == $(option).attr('value')){
				$(option).prop('selected', true);
			}
			else{
				$(option).prop('selected', false);
			}
		});

    const contactSection = document.querySelector('#contact');
    if(contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
	});
});