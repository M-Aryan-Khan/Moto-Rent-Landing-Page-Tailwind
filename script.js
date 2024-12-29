const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
    index++;
    if (index === slide.length) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(nextSlide, 7000);

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".carsNum, .clientsNum");
    const speed = 300; // Change animation speed here

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const text = 'Your journey, Our Wheels!"';
    const typewriter = document.getElementById('typewriter');
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(reset, 5000);
        }
    }

    function reset() {
        typewriter.textContent = '"';
        index = 0;
        setTimeout(type, 1000);
    }

    type();
});

