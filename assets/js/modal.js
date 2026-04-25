



$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
    $('body').addClass('body_fix');
});

$('.close').on('click', function () {

    $('body').removeClass('body_fix');
    let prt = $(this).parents('.modal');

    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$(window).on('click', function (event) {


    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
            $('body').removeClass('body_fix');
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});




















document.querySelectorAll('.news-box').forEach(box => {
    box.addEventListener('click', () => {
        const title = box.querySelector('h3').textContent;
        const date = box.querySelector('span').textContent;
        const text = box.querySelector('p').textContent;
        const imgSrc = box.querySelector('img').getAttribute('src');

        const modal = document.querySelector('.modal-news-info');
        modal.querySelector('img').setAttribute('src', imgSrc);
        modal.querySelector('h3').textContent = title;
        modal.querySelector('span').textContent = date;
        modal.querySelector('p').textContent = text;
    });
});













document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {

        const modalSelector = this.dataset.modalTarget;
        const tabName = this.dataset.modal;
        const modal = document.querySelector(modalSelector);
        if (!modal) return;

        document.body.classList.add('modal-open');
        modal.classList.add('active');

        modal.querySelectorAll('.modal-options-click').forEach(el => el.classList.remove('active'));
        modal.querySelectorAll('.modal-options-js').forEach(el => el.classList.remove('active'));

        modal.querySelector(`.modal-options-click[data-modal="${tabName}"]`)?.classList.add('active');
        modal.querySelector(`.modal-options-js[data-modal="${tabName}"]`)?.classList.add('active');
    });
});


document.querySelectorAll('.modal-overlay').forEach(modal => {

    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeModal(modal);
        });
    }

    // 🔥 Правильное закрытие по клику как в твоём jQuery коде
    modal.addEventListener('click', (e) => {
        const modalWindow = modal.querySelector('.modal-window');

        // 1 — клик строго по overlay → закрыть
        if (e.target === modal) {
            closeModal(modal);
            return;
        }

        // 2 — клик строго по modal-window (НЕ по детям!) → закрыть
        if (e.target === modalWindow) {
            closeModal(modal);
        }
    });

    // Вкладки
    modal.querySelectorAll('.modal-options-click').forEach(tab => {
        tab.addEventListener('click', function() {
            modal.querySelectorAll('.modal-options-click').forEach(el => el.classList.remove('active'));
            modal.querySelectorAll('.modal-options-js').forEach(el => el.classList.remove('active'));

            this.classList.add('active');
            modal.querySelector(`.modal-options-js[data-modal="${this.dataset.modal}"]`)?.classList.add('active');
        });
    });
});


// 🔥 Общая функция закрытия модалки — как fadeOut в jQuery
function closeModal(modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

