


const buttons = document.querySelectorAll(".button");
        const body = document.body;

        // Функция для определения системной темы
        function getSystemTheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            } else {
                return 'light';
                
            }       {
                return 'nikipatch';
            }
        }

        // Загружаем системную тему при загрузке страницы
        const systemTheme = getSystemTheme();
        body.classList.add(systemTheme);
        buttons.forEach(button => {
            if (button.dataset.theme === systemTheme) {
                button.classList.add("active");
            }
        });

        // Обработчик событий для кнопок
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const theme = button.dataset.theme;
                body.classList.remove("system", "dark", "light", "nikipatch");
                body.classList.add(theme);

                buttons.forEach(b => b.classList.remove("active"));
                button.classList.add("active");
            });
        });


   window.addEventListener('load', () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.add('show');
            });

            const imageLinks = document.querySelectorAll('.image-link');
            const modal = document.querySelector('.modal');
            const closeModal = document.querySelector('.close-modal');
            const modalImage = document.getElementById('modal-image');

            imageLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault(); // Предотвращаем переход по ссылке
                    const imageSrc = link.dataset.imageSrc; // Получаем источник изображения
                    modalImage.src = imageSrc;
                    modal.classList.add('show'); 
                });
            });

            closeModal.addEventListener('click', () => {
                modal.classList.remove('show');
            });

            // Закрытие модального окна по клику за пределами него
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.classList.remove('show');
                }
            });
        });

  // Получаем заголовок
  const welcomeHeading = document.getElementById('welcome');

  // Запускаем анимацию после загрузки страницы
  window.onload = function() {
    welcomeHeading.style.opacity = 1;
    welcomeHeading.style.transform = "translateY(0)";
  }

  // Выпадающее меню
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  let isDropdownOpen = false;

  dropdownBtn.addEventListener('click', function() {
    isDropdownOpen = !isDropdownOpen;
    if (isDropdownOpen) {
      dropdownContent.style.display = 'block';
      dropdownBtn.focus(); // Важно, чтобы фокус был на кнопке для повторного закрытия
    } else {
      dropdownContent.style.display = 'none';
    }
  });

  // Предотвращение закрытия выпадающего меню при клике на ссылки внутри
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown') && isDropdownOpen) {
      dropdownContent.style.display = 'none';
      isDropdownOpen = false;
    }
  });

   // Дождитесь загрузки страницы
   window.addEventListener('load', () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.add('show'); 
            });
        });
