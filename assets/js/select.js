/* ---------- Инициализация всех select-wrapper на странице ---------- */

document.querySelectorAll('.select-wrapper').forEach(wrapper => {

    const selectBox    = wrapper.querySelector('.select-box');
    const dropdown     = wrapper.querySelector('.dropdown-sel');
    const selectedItems = wrapper.querySelector('.selected-items');
    const checkboxes   = dropdown.querySelectorAll('input');

    /* ---------- OPEN / CLOSE ---------- */

    function openDropdown() {
        dropdown.style.display = 'block';
        selectBox.classList.add('active');
    }

    function closeDropdown() {
        dropdown.style.display = 'none';
        selectBox.classList.remove('active');
    }

    /* ---------- Клик по select ---------- */

    selectBox.addEventListener('click', () => {
        const isOpen = dropdown.style.display === 'block';
        isOpen ? closeDropdown() : openDropdown();
    });

    /* ---------- Выбор checkbox ---------- */

    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            renderTags();
            closeDropdown();
        });
    });

    /* ---------- Рендер тегов ---------- */

    function renderTags() {
        selectedItems.innerHTML = '';

        const checked = [...checkboxes].filter(
            c => c.checked && c.value !== 'all'
        );

        if (!checked.length) {
            selectedItems.innerHTML = `<span class="placeholder">Все</span>`;
            return;
        }

        checked.forEach(cb => {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.innerHTML = `
                ${cb.value}
                <span data-value="${cb.value}">&times;</span>
            `;
            selectedItems.appendChild(tag);
        });
    }

    /* ---------- Удаление тега по X ---------- */

    selectedItems.addEventListener('click', e => {
        if (e.target.dataset.value) {
            const val = e.target.dataset.value;
            checkboxes.forEach(cb => {
                if (cb.value === val) cb.checked = false;
            });
            renderTags();
        }
    });
});


/* ---------- Клик вне любого блока — закрыть все ---------- */

document.addEventListener('click', e => {
    if (!e.target.closest('.select-wrapper')) {
        document.querySelectorAll('.select-wrapper').forEach(wrapper => {
            const dropdown  = wrapper.querySelector('.dropdown-sel');
            const selectBox = wrapper.querySelector('.select-box');
            dropdown.style.display = 'none';
            selectBox.classList.remove('active');
        });
    }
});









$('.price-ascending-click').on('click', function (e) {
    $(this).parent().toggleClass('price-ascending-active');
    e.stopPropagation();
});

$('.price-ascending-down ul li').on('click', function () {
    let selected_text = $(this).html();
    $('.price-ascending-past').html(selected_text);
    $('.price-ascending').removeClass('price-ascending-active')
});
$(window).on('click', function (e) {
    let menuSort = $('.price-ascending');
    if (e.target !== menuSort) {
        menuSort.removeClass('price-ascending-active');
    }
});