let slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(changeSlide, 2500);

document.getElementById('currentYear').textContent = new Date().getFullYear();

setInterval(() => {
    document.getElementById('datetime').textContent = new Date().toLocaleString();
}, 1000);
$(window).on('scroll', function () {
    $('.animated-section').each(function () {
        let sectionTop = $(this).offset().top;
        let sectionBottom = sectionTop + $(this).outerHeight();
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
            $(this).addClass('visible');
        }
    });
});s
