document.addEventListener('DOMContentLoaded', (event) => {
    const button_1 = document.querySelector('#button-1');
    const tooltip_1 = document.querySelector('#tooltip-1');

    Popper.createPopper(button_1, tooltip_1, {
        placement: 'top',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 30],
                },
            },
        ],
    });

    const button_2 = document.querySelector('#button-2');
    const tooltip_2 = document.querySelector('#tooltip-2');

    Popper.createPopper(button_2, tooltip_2, {
        placement: 'top',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 30],
                },
            },
        ],
    });

    const button_3 = document.querySelector('#button-3');
    const tooltip_3 = document.querySelector('#tooltip-3');

    Popper.createPopper(button_3, tooltip_3, {
        placement: 'top',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 30],
                },
            },
        ],
    });

    document.querySelectorAll('.dropdown__simplebar').forEach((dropdown) => {
        new SimpleBar(dropdown, {
            autoHide: false,
            scrollbarMaxSize: 25,
        });
    });

    const btns = document.querySelectorAll('.header-nav-bot__btn');
    const dropdowns = document.querySelectorAll('.dropdown');
    const activeClassdropdowns = 'dropdown__active';
    const activeClassbtns = 'header-nav-bot__btn--active';

    btns.forEach((item) => {
        item.addEventListener('click', function () {
            let DropThis = this.parentElement.querySelector('.dropdown');
            dropdowns.forEach((el) => {
                if (el != DropThis) {
                    el.classList.remove(activeClassdropdowns);
                }
            });
            btns.forEach((el) => {
                if (el != this) {
                    el.classList.remove(activeClassbtns);
                }
            });
            DropThis.classList.toggle(activeClassdropdowns);
            this.classList.toggle(activeClassbtns);
        });
    });

    const select = document.querySelector('#selectCustom');

    const choices = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        renderSelectedChoices: 'auto',
    });

    const swiper = new Swiper('.mySwiper', {
        loop: true,
        clickable: true,
        slidesPerView: 1,
        touchEventsTarget: 'container',

        a11y: {
            enabled: true,
            paginationBulletMessage: 'Перейти на слайд номер {{index}}',
        },
    });

    /*burger*/

    let burger = document.querySelector('.burger-btn');
    let menu = document.querySelector('.header-nav__links');
    let menuLinks = document.querySelectorAll('.header-nav__link');
    let logBtn = document.querySelector('.header-nav__btn');
    let searchBarBtn = document.querySelector('.header-nav__search');
    let searchBar = document.querySelector('.searchbar');
    let searchBarCloseBtn = document.querySelector('.searchbar__btn');

    if (window.innerWidth < 1200) {
        menu.ariaHidden = true;
        menuLinks.forEach(function (el) {
            el.classList.add('header-nav__link--hidden');
        });
    }

    searchBarBtn.addEventListener('click', () => {
        searchBar.classList.toggle('searchbar--active');
    });
    searchBarCloseBtn.addEventListener('click', () => {
        searchBar.classList.toggle('searchbar--active');
    });

    burger.addEventListener('click', function () {
        burger.blur();
        burger.classList.toggle('burger-btn--active');
        menu.classList.toggle('header-nav__list--active');
        document.body.classList.toggle('stop-scroll');
        if (menu.attributes['aria-hidden'].value == 'true') {
            menu.setAttribute('aria-hidden', 'false');
            menuLinks.forEach(function (el) {
                el.classList.remove('header-nav__link--hidden');
                logBtn.classList.add('header-nav__btn--active');
            });
        } else {
            menu.setAttribute('aria-hidden', 'true');
            menuLinks.forEach(function (el) {
                el.classList.add('header-nav__link--hidden');
                logBtn.classList.remove('header-nav__btn--active');
            });
        }
    });
    /*burger end*/

    const swiperGallery = new Swiper('.gallery-slider__swiper', {
        clickable: true,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.gallery-slider__btn-next',
            prevEl: '.gallery-slider__btn-prev',
        },

        a11y: {
            enabled: true,
            paginationBulletMessage: 'Перейти на слайд номер {{index}}',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 38,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    const swiperEvents = new Swiper('.events-slider', {
        clickable: true,
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
            nextEl: '.events__btn-next',
            prevEl: '.events__btn-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },

        a11y: {
            enabled: true,
            paginationBulletMessage: 'Перейти на слайд номер {{index}}',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 27,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 27,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    const swiperProjects = new Swiper('.projects-slider', {
        clickable: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.projects__btn-next',
            prevEl: '.projects__btn-prev',
        },

        a11y: {
            enabled: true,
            paginationBulletMessage: 'Перейти на слайд номер {{index}}',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    new Accordion('.accordion-list', {
        elementClass: 'accordion',
        triggerClass: 'accordion__control',
        panelClass: 'accordion__content',
        activeClass: 'accordion--active',
        heightStyle: 'content',
        active: true,
        collapsible: true,
        icons: false,
    });

    const closeModalBtn = document.querySelector('.modal__close-btn');
    const modal = document.querySelector('.modal');
    const imgs = document.querySelectorAll('.gallery-slider__slide');
    imgs.forEach((item) => {
        item.addEventListener('click', () => {
            modal.classList.toggle('modal--hidden');
            document.body.classList.add('stop-scroll');
        });
    });
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('modal--hidden');
        document.body.classList.remove('stop-scroll');
    });

    ymaps.ready(function () {
        var myMap = new ymaps.Map(
                'map',
                {
                    center: [55.758468, 37.601088],
                    zoom: 14,
                    controls: [],
                },
                {
                    searchControlProvider: 'yandex#search',
                    suppressMapOpenBlock: true,
                }
            ),
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemark = new ymaps.Placemark(
                myMap.getCenter(),
                {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка',
                },
                {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'images/metka.svg',
                    // Размеры метки.
                    iconImageSize: [28, 40],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38],
                }
            ),
            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856]);

        myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
        myMap.controls.remove('routeEditor');
    });

    const validation = new JustValidate('.contacts-form', {
        colorWrong: '#D11616',
    });

    validation
        .addField('.name', [
            {
                rule: 'required',
                errorMessage: 'Вы не ввели имя',
            },
        ])
        .addField('.phone', [
            {
                rule: 'function',
                validator: function (name, value) {
                    const phone = document.querySelector('.phone');
                    return phone.value.length >= 11;
                },
                errorMessage: 'Недопустимый формат',
            },
        ]);
});
