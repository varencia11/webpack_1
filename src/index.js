let swiper, swiper1, swiper2;

    function toggleView() {
        if (window.innerWidth < 768) {
            // Инициализируем Swiper, если он не инициализирован
            if (!swiper) {
                swiper = new Swiper('.image-slider', {
                    slidesPerView: 1.2,
	                spaceBetween: 20,
                    centeredSlides: false,
                    loop: false,
                    pagination: {
                        el: '.swiper-pagination-1',
                        clickable: true,
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 20
                        },
                        400: {
                            slidesPerView: 1.4,
                          spaceBetween: 20
                        },
                        407: {
                            slidesPerView: 1.2,
                          spaceBetween: 20
                        },
                        414: {
                            slidesPerView: 1.2,
                          spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                          slidesPerView: 1.4,
                          spaceBetween: 20
                        },
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 2.2,
                          spaceBetween: 40
                        }
                      }
                });
            }
        } else {
            // Разрушаем Swiper, если он существует
            if (swiper) {
                swiper.destroy(true, true);
                swiper = undefined;
            }
        }

        swiper1 = new Swiper('.repair-slider', {
            slidesPerView: 1.2, // Настройки по вашему усмотрению
            spaceBetween: 20,
            loop: false,
            pagination: {
              el: '.swiper-pagination-2', // Пагинация для второго слайдера
              clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20
                  },
                  400: {
                      slidesPerView: 1.4,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1.8,
                    spaceBetween: 20
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2.2,
                    spaceBetween: 40
                  }
            },
          });

          swiper2 = new Swiper('.prices-slider', {
            slidesPerView: 1.2, // Настройки по вашему усмотрению
            spaceBetween: 20,
            loop: false,
            pagination: {
              el: '.swiper-pagination-3', // Пагинация для второго слайдера
              clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20
                  },
                  400: {
                      slidesPerView: 1.4,
                    spaceBetween: 20
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1.8,
                    spaceBetween: 20
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2.2,
                    spaceBetween: 40
                  }
            },
          });
        
    }


    // Проверяем размер экрана при загрузке
    toggleView();

    // Проверяем размер экрана при изменении
    window.addEventListener('resize', toggleView);

    document.getElementById('toggleButton').addEventListener('click', function () {
        // Находим все элементы с классом 'content'
        const contentDivs = document.querySelectorAll('.content');
        const toggleIcon = document.getElementById('toggleIcon');
        // Проверяем, скрыты ли дивы или нет, основываясь на первом диве
        const areHidden = contentDivs[0].style.display === 'none' || !contentDivs[0].classList.contains('show');
        
        if (areHidden) {
            // Если скрыты, показываем все
            contentDivs.forEach(div => {
                div.classList.add('show');
            });
            this.textContent = 'Скрыть';
            toggleIcon.src = ('resources/hide.svg');

        } else {
            // Если показаны, скрываем все
            contentDivs.forEach(div => {
                div.classList.remove('show');
            });
            this.textContent = 'Показать все';
            toggleIcon.src = ('resources/expand.svg')
        }
    });

    toggleView();

    // Проверяем размер экрана при изменении
    window.addEventListener('resize', toggleView);

    document.getElementById('toggleButton1').addEventListener('click', function () {
        // Находим все элементы с классом 'content'
        const contentDivs = document.querySelectorAll('.hidden');
        const toggleIcon = document.getElementById('toggleIcon1');
        // Проверяем, скрыты ли дивы или нет, основываясь на первом диве
        const areHidden = contentDivs[0].style.display === 'none' || !contentDivs[0].classList.contains('show');
        
        if (areHidden) {
            // Если скрыты, показываем все
            contentDivs.forEach(div => {
                div.classList.add('show');
            });
            this.textContent = 'Скрыть';
            toggleIcon.src = ('resources/hide.svg');

        } else {
            // Если показаны, скрываем все
            contentDivs.forEach(div => {
                div.classList.remove('show');
            });
            this.textContent = 'Показать все';
            toggleIcon.src = ('resources/expand.svg')
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const menuImage = document.querySelector('.menu-image'); // Menu button
        const sideFeed = document.querySelector('#sideFeed');    // Side menu
        const pageContent = document.querySelector('.blureffect');  // The entire page content
        const chat1 = document.querySelector('.chat1');
    
        // Open the menu on clicking the menu image
        menuImage.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent closing when clicking on the menu image
            sideFeed.classList.toggle('show');   // Toggle the "show" class to display the menu
            pageContent.classList.add('opacity'); // Blur the background when menu opens
        });
    
        // Close the menu when clicking outside of the menu
        document.addEventListener('click', function(event) {
            if (!sideFeed.contains(event.target) && !menuImage.contains(event.target)) {
                sideFeed.classList.remove('show');  // Close the menu if clicked outside
                // pageContent.classList.remove('opacity'); // Remove blur when menu is closed
            }
        });
    
        // Close the menu on clicking the "Send" button (or any other button inside the menu)
        document.querySelector('.cross').addEventListener('click', function(event) {
            sideFeed.classList.remove('show');    // Close the menu after submission
            pageContent.classList.remove('opacity'); // Remove blur effect
            // pageContent.classList.toggle('blureffect'); // Blur the background when menu opens
        });

        chat1.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent closing when clicking on the menu image
            sideFeed.classList.toggle('show');   // Toggle the "show" class to display the menu
            pageContent.classList.add('opacity'); // Blur the background when menu opens
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const sideCall = document.querySelector('#sideCall');
        const callImage = document.querySelector('.call-image')
        const pageContent = document.querySelector('.blureffect');  // The entire page content
        const call1 = document.querySelector('.call1');

        callImage.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent closing when clicking on the menu image
            sideCall.classList.toggle('show');   // Toggle the "show" class to display the menu
            pageContent.classList.add('opacity'); // Blur the background when menu opens
        });

        document.addEventListener('click', function(event) {
            if (!sideCall.contains(event.target) && !callImage.contains(event.target)) {
                sideCall.classList.remove('show');  // Close the menu if clicked outside
                // pageContent.classList.remove('opacity'); // Remove blur when menu is closed
            }
        });

        document.querySelector('.cross1').addEventListener('click', function(event) {
            sideCall.classList.remove('show');    // Close the menu after submission
            pageContent.classList.remove('opacity'); // Remove blur effect
        });

        document.querySelector('.blureffect').addEventListener('click', function(event) {
            sideCall.classList.remove('show');    // Close the menu after submission
            pageContent.classList.remove('opacity'); // Remove blur effect
        });

        call1.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent closing when clicking on the menu image
            sideCall.classList.toggle('show');   // Toggle the "show" class to display the menu
            pageContent.classList.add('opacity'); // Blur the background when menu opens
        });
    });



    document.addEventListener('DOMContentLoaded', function() {
        const callButton = document.querySelector('.call'); // Кнопка для открытия sideCall
        const menuButtonf = document.querySelector('.menu'); // Кнопка для открытия sideFeed
        const menuButton = document.querySelector('.button-menu'); // Кнопка для открытия меню
        const closeButton = document.querySelector('.button-close'); // Кнопка для закрытия меню (крестик)
        const bodyMenu = document.querySelector('.body__menu');    // Сайдбар меню
        const sideCall = document.querySelector('#sideCall');    // Меню sideCall
        const sideFeed = document.querySelector('#sideFeed');    // Меню sideFeed
        const pageContent = document.querySelector('.blureffect');  // Контент страницы для эффекта блюра
        pageContent.classList.remove('blureffect');
    
        // Функция для открытия или закрытия меню
        function toggleMenu() {
            const screenWidth = window.innerWidth; // Получаем текущую ширину экрана
    
            if (screenWidth <= 1120) { // Только для экранов до 1120px
                // Добавляем обработчик события на кнопку меню
                menuButton.addEventListener('click', function(event) {
                    event.stopPropagation(); // Не закрывать меню при клике на саму кнопку
                    bodyMenu.classList.add('show');   // Переключаем класс "show" для отображения меню
                    pageContent.classList.add('blureffect'); // Переключаем класс для эффекта блюра
                });
    
                menuButtonf.addEventListener('click', function(event) {
                    event.stopPropagation();
                    sideFeed.classList.add('show');   // Переключаем класс "show" для отображения sideFeed
                    sideCall.classList.remove('show');   // Закрываем другое меню
                    bodyMenu.classList.remove('show');
                    pageContent.classList.add('blureffect'); // Переключаем класс для эффекта блюра
                });

                callButton.addEventListener('click', function(event) {
                    event.stopPropagation();
                    sideCall.classList.toggle('show');   // Переключаем класс "show" для отображения sideCall
                    sideFeed.classList.remove('show');   // Закрываем другое меню
                    bodyMenu.classList.remove('show');
                    pageContent.classList.add('blureffect'); // Переключаем класс для эффекта блюра
                });

                // Добавляем обработчик события на кнопку закрытия меню (крестик)
                closeButton.addEventListener('click', function() {
                    bodyMenu.classList.remove('show');    // Закрываем меню
                    pageContent.classList.remove('blureffect'); // Убираем эффект блюра
                });
    
                // Закрытие меню при клике вне области меню
                document.addEventListener('click', function(event) {
                    if (!bodyMenu.contains(event.target) && !menuButton.contains(event.target)) {
                        bodyMenu.classList.remove('show');    // Закрываем меню
                        pageContent.classList.remove('blureffect'); // Убираем эффект блюра
                    }
                });
            } else {
                // Если ширина экрана больше 1120px, убираем класс "show" и "blureffect"
                bodyMenu.classList.remove('show');
                pageContent.classList.remove('blureffect');
                sideCall.classList.remove('show');
                sideFeed.classList.remove('show');
            }
        }
    
        // Вызываем функцию при загрузке страницы
        toggleMenu();
    
        // Проверяем при изменении размера окна
        window.addEventListener('resize', toggleMenu);
    });
    

    