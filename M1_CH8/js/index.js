function showName(name, surname) {
    console.log(name + surname);
}

setTimeout(showName, 500, 'Ivan', 'Ivanov');

let images = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg']
let i = 0;
let count = 0;

let interval = setInterval(slideShowExe, 200);

function slideShowExe() {

    if (count < 10) {
        slideShow(i)
        if (i === 2) {
            i = 0;
        } else {
            i++;
        }

        count++;
    } else {
        clearInterval(interval);
    }
}

function slideShow(n) {
    let slide = document.getElementById('slide');
    slide.src = images[n];
}

