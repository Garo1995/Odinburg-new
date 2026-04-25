







$(document).ready(function () {




    addActiveClass('weather-href', 'active-weather');
    changeCaseBlock(this, 'weather-href', 'construct-min', 'active-weather', 'weather-click');
    $('.weather-click').on('click', function () {
        changeActiveClassWithClick(this, 'weather-href', 'active-weather')
        changeCaseBlock(this, 'weather-href', 'construct-min', 'active-weather', 'weather-click');
    })


    addActiveClass('layout-floor', 'layout-floor-act');
    changeCaseBlock(this, 'layout-floor', 'layout-pic-min', 'layout-floor-act', 'floor-plan');
    $('.floor-plan').on('click', function () {
        changeActiveClassWithClick(this, 'layout-floor', 'layout-floor-act')
        changeCaseBlock(this, 'layout-floor', 'layout-pic-min', 'layout-floor-act', 'floor-plan');
    })

    addActiveClass('parking-href', 'parking-active');
    changeCaseBlock(this, 'parking-href', 'parking-href-min', 'parking-active', 'parking-click');
    $('.parking-click').on('click', function () {
        changeActiveClassWithClick(this, 'parking-href', 'parking-active')
        changeCaseBlock(this, 'parking-href', 'parking-href-min', 'parking-active', 'parking-click');
    })





    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            case_block_child.removeClass('active-cat');
        })
        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).addClass('active-cat');
                }
            })
        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).addClass('active-cat');
                }
            })
        }
    }
});











document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-data-click');
    const contentBlocks = document.querySelectorAll('.menu-modal-js');

    function showCatalog(catalog) {
        // подсветка пункта меню
        menuItems.forEach(item => {
            item.classList.toggle('active', item.dataset.catalog === catalog);
        });

        // показ нужного блока
        contentBlocks.forEach(block => {
            block.classList.toggle('active', block.dataset.catalog === catalog);
        });
    }

    // вместо click — наведение
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const catalog = item.dataset.catalog;
            showCatalog(catalog);
        });
    });

    // по умолчанию можно открыть первый пункт
    if (menuItems[0]) {
        showCatalog(menuItems[0].dataset.catalog);
    }
});


