let businessSwiper = new Swiper(".business-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".business-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">
                        <span class="progress"></span>
                    </span>`;
        },
    },
    navigation: {
        nextEl: ".business-button-next",
        prevEl: ".business-button-prev",
    },
});

// Функция запуска анимации только на активном слайде
function startActiveProgress() {
    document.querySelectorAll(".progress").forEach(el => {
        el.classList.remove("animate");
    });

    const active = document.querySelector(".swiper-pagination-bullet-active .progress");
    if (active) {
        void active.offsetWidth; // перезапуск
        active.classList.add("animate");
    }
}

// Запускаем после инициализации
businessSwiper.on("init", () => {
    startActiveProgress();
});

// Каждый раз при смене слайда
businessSwiper.on("slideChangeTransitionStart", () => {
    startActiveProgress();
});

// Вручную триггерим init (Swiper 8+)
businessSwiper.init();









let mortgageSwiper = new Swiper(".mortgage-slider", {
    slidesPerView: 3,
    spaceBetween: 8,
    breakpoints: {
        1599: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 8,

        },
        1199: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 8,

        },

        670: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 8,

        },

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 8,

        },
    },
    pagination: {
        el: ".mortgage-pagination",
        clickable: true,

    },
    navigation: {
        nextEl: ".mortgage-button-next",
        prevEl: ".mortgage-button-prev",
    },
});




let apartmentsSwiper = new Swiper(".apartments-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
        1299: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        1199: {
            slidesPerView: 3.5,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },

        570: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        480: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        320: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

    navigation: {
        nextEl: ".apartments-next",
        prevEl: ".apartments-prev",
    },
});







let projectSwiper = new Swiper(".project-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
        1199: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 16,

        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        570: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        470: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        320: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
    },

    navigation: {
        nextEl: ".project-next",
        prevEl: ".project-prev",
    },
});





let optionsSwiper = new Swiper(".finish-options-slider", {
    slidesPerView: 2,
    spaceBetween: 16,

    pagination: {
        el: ".finish-pagination",
        clickable: true,
    },
    breakpoints: {
        1360: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },

        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,

        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

});




let optionsGallerySwiper = new Swiper(".options-gallery-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".options-button-next",
        prevEl: ".options-button-prev",
    },
});



let constructionSwiper = new Swiper(".construction-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        '899': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '760': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '570': {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        '480': {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
    pagination: {
        el: ".construction-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".construction-next",
        prevEl: ".construction-prev",
    },
});







let gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 4,
    spaceBetween: 16,
    breakpoints: {
        1109: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        1020: {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        899: {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup: 1,
            loop: true,
        },
        570: {
            slidesPerView: 1.5,
            spaceBetween: 16,
            slidesPerGroup: 1,
            loop: true,
        },
        320: {
            slidesPerView: 1.1,
            spaceBetween: 16,
            slidesPerGroup: 1,
            loop: true,
        },
    },
    navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
    },
});



let newsSwiper = new Swiper(".news-slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
        1090: {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        1020: {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        899: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        530: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
            slidesPerGroup: 1,
            loop: true,
        },
    },
    navigation: {
        nextEl: ".news-next",
        prevEl: ".news-prev",
    },
    pagination: {
        el: ".news-pagination",
        clickable: true,
    },
});








let architectureSwiper = new Swiper(".architecture-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".archit-button-next",
        prevEl: ".archit-button-prev",
    },
});

let architectureTwoSwiper = new Swiper(".architecture-two-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".archit-two-button-next",
        prevEl: ".archit-two-button-prev",
    },
});










let modaloptionsSwiper = new Swiper(".modal-options-slider", {
    slidesPerView: 5,

    grabCursor: true,
    simulateTouch: true,
    touchStartPreventDefault: false,
    resistanceRatio: 0,
    navigation: {
        nextEl: ".pill-arrow-next",
        prevEl: ".pill-arrow-prev",
    },
});

const scrollContainer = document.querySelector('.modal-options-slider .swiper-wrapper');
const tabs = document.querySelectorAll('.swiper-slide');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tab.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
    });
});









