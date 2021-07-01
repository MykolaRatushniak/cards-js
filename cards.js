// const slides = document.querySelectorAll('.slide')

// slides [2].classList.add('active'); //слайдер в той же час являється масивом, ми можемо зробити якийсь елемент постійно активним при обновленні сторінки

// for (const slide of slides) {
//     slide.addEventListener('click', () => {
//         clearActivClasses()
//         slide.classList.add('active')
//     });
// };

// function clearActivClasses() {
//     slides.forEach((slide) => {
//         slide.classList.remove('active')
//     });
// };


//створюємо плагін


function slidesPlugin(activeSlide) {
    const slides = document.querySelectorAll('.slide');

    slides [activeSlide].classList.add('active'); 

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActivClasses()
            slide.classList.add('active')
        });
    };

        function clearActivClasses() {
            slides.forEach((slide) => {
                slide.classList.remove('active')
            });
        };
};

slidesPlugin(2);