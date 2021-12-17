var myCarousel = document.querySelector('#carouselCountries')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: true
})

let slide1 = document.getElementById('slide1');
slide1.addEventListener('click', showDescription);

function showDescription() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    carousel.pause();
    myModal.show();
}

let closeDescription = document.getElementById('closeDescription');
closeDescription.addEventListener('click', countinueCarousel);

function countinueCarousel() {
    carousel.cycle();
}