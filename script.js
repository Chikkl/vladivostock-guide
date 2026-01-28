const guides = [
    {
        id: 1,
        fullName: "Морозов Максим Петрович",
        profile: "Мужчина, 45 лет. Кандидат исторических наук, автор книг о Владивостокской крепости.",
        specialization: "Глубокие исторические экскурсии, форты, архитектура, военно-морская история.",
        languages: ["Русский", "Английский", "Китайский"],
        tourFormat: "Пешеходный или на своем минивэне (для групп).",
        idealFor: "Для вдумчивых туристов, любителей истории, взрослых и студентов.",
        specialFeature: "Показывает архивные фото на планшете для сравнения 'было-стало'.",
        image: "photos/id_1.png"
    },
    {
        id: 2,
        fullName: "Паровозов Аркадий Аркадьевич",
        profile: "Мужчина, 25 лет. Фотограф, ведущий тревел-блога о Дальнем Востоке.",
        specialization: "Нестандартные и атмосферные маршруты, лучшие фото-точки (панорамы, заброшки, street art), современная культурная жизнь города.",
        languages: ["Русский", "Английский"],
        tourFormat: "Пешеходный, на своем автомобиле (для выездных).",
        idealFor: "Для молодежи, Instagram-путешественников, творческих людей, искателей необычных ракурсов.",
        specialFeature: "Фотосопровождение в подарок, советы по обработке снимков.",
        image: "photos/id_2.png"
    },
    {
        id: 3,
        fullName: "Леворгов Андрей Михайлович",
        profile: "Мужчина, 35 лет. Инструктор по дайвингу, скалолазанию, организатор походов.",
        specialization: "Активный отдых, походы на маяки, дайвинг-сафари к затонувшим объектам, внедорожные выезды в пригород.",
        languages: ["Русский", "Базовый английский"],
        tourFormat: "На своем внедорожнике или катере.",
        idealFor: "Для любителей адреналина, активных туристов, небольших групп друзей.",
        specialFeature: "Предоставляет необходимое снаряжение и страховку.",
        image: "photos/id_3.png"
    },
    {
        id: 4,
        fullName: "Соловьёва Мария Олеговна",
        profile: "Женщина, 28 лет. Выпускница школы гидов, мама двоих детей.",
        specialization: "Семейные экскурсии, гастрономические туры (рынок, дегустации), квесты для детей.",
        languages: ["Русский", "Английский (разговорный)"],
        tourFormat: "Пешеходный (центр) или комбинированный.",
        idealFor: "Для семей с детьми, молодежных компаний, любителей неформального общения и еды.",
        specialFeature: "Включает в маршрут интерактивные элементы и детские игры.",
        image: "photos/id_4.png"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Получаем все необходимые элементы
    const form = document.getElementById('guideForm');
    const submitBtn = document.getElementById('submitBtn');
    const guideCard = document.getElementById('guideCard');
    const resetBtn = document.getElementById('resetBtn');
    const guideModal = document.getElementById('guideModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalResetBtn = document.getElementById('modalResetBtn');
    const modalOverlay = document.querySelector('.modal-overlay');

    console.log('🔍 Элементы найдены:');
    console.log('Form:', form);
    console.log('SubmitBtn:', submitBtn);
    console.log('GuideCard:', guideCard);
    console.log('GuideModal:', guideModal);

    // ГАРАНТИРУЕМ, что модальное окно изначально скрыто (используем inline style)
    if (guideModal) {
        guideModal.style.display = 'none';
        console.log('✅ Модальное окно изначально скрыто (inline style)');
    } else {
        console.log('⚠️  Модальное окно не найдено');
    }

    // Обработчики событий для кнопок
    if (submitBtn) {
        console.log('✅ Кнопка submitBtn найдена, добавляем обработчики');
        
        // Добавляем оба события: click для десктопа и touchstart для мобильных
        submitBtn.addEventListener('click', function(e) {
            console.log('🖱️ Клик по кнопке!');
            e.preventDefault();
            if (validateForm()) {
                findGuide();
            }
        });
        
        // Добавляем touchstart для лучшей поддержки мобильных устройств
        submitBtn.addEventListener('touchstart', function(e) {
            console.log('📱 Касание кнопки!');
            e.preventDefault();
            if (validateForm()) {
                findGuide();
            }
        }, { passive: false });
    } else {
        console.log('❌ Кнопка submitBtn не найдена!');
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            form.reset();
            guideCard.classList.add('hidden');
        });
    }

    // Обработчики для модального окна (используем inline style)
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            if (guideModal) {
                guideModal.classList.remove('show');
                setTimeout(() => {
                    guideModal.style.display = 'none';
                }, 300);
            }
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function() {
            if (guideModal) {
                guideModal.classList.remove('show');
                setTimeout(() => {
                    guideModal.style.display = 'none';
                }, 300);
            }
        });
    }

    if (modalResetBtn) {
        modalResetBtn.addEventListener('click', function() {
            if (form) {
                form.reset();
            }
            if (guideModal) {
                guideModal.classList.remove('show');
                setTimeout(() => {
                    guideModal.style.display = 'none';
                }, 300);
            }
        });
    }

    function validateForm() {
        const requiredInputs = form.querySelectorAll('[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            if (!input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (!isValid) {
            alert('Пожалуйста, заполните все обязательные поля.');
        }

        return isValid;
    }

    function findGuide() {
        const selectedLanguage = document.querySelector('input[name="language"]:checked').value;
        const languageMap = {
            'russian': 'Русский',
            'english': 'Английский',
            'chinese': 'Китайский',
            'korean': 'Корейский',
            'other': document.getElementById('otherLanguage').value || 'Русский'
        };
        const userLanguage = languageMap[selectedLanguage];

        console.log('🔍 Ищем гида для языка:', userLanguage);
        
        const filteredGuides = guides.filter(guide => guide.languages.includes(userLanguage));
        console.log('📋 Найдено гидов:', filteredGuides.length);

        if (filteredGuides.length === 0) {
            // Если не найдено гидов для выбранного языка, используем первого доступного
            console.log('⚠️  Гидов для этого языка не найдено, используем первого доступного');
            const randomGuide = guides[Math.floor(Math.random() * guides.length)];
            displayGuide(randomGuide);
        } else {
            const randomGuide = filteredGuides[Math.floor(Math.random() * filteredGuides.length)];
            displayGuide(randomGuide);
        }
    }

    function displayGuide(guide) {
        // Заполняем информацию в модальном окне
        document.getElementById('modalGuideName').textContent = guide.fullName;
        document.getElementById('modalGuideProfile').textContent = guide.profile;
        document.getElementById('modalGuideSpecialization').textContent = guide.specialization;
        document.getElementById('modalGuideFormat').textContent = guide.tourFormat;
        document.getElementById('modalGuideIdealFor').textContent = guide.idealFor;
        document.getElementById('modalGuideSpecialFeature').textContent = guide.specialFeature;
        document.getElementById('modalGuideLanguages').textContent = `Языки: ${guide.languages.join(', ')}`;
        
        // Устанавливаем изображение гида (если есть)
        const guideImage = document.getElementById('modalGuideImage');
        if (guide.image && guide.image !== 'images/default.jpg') {
            guideImage.src = guide.image;
            guideImage.style.display = 'block';
        } else {
            guideImage.style.display = 'none';
        }

        // Показываем модальное окно (используем inline style)
        guideModal.style.display = 'flex';
        
        // Добавляем класс для анимации
        guideModal.classList.add('show');

        // Для совместимости также заполняем старую карточку гида
        document.getElementById('guideName').textContent = guide.fullName;
        document.getElementById('guideSpecialization').textContent = guide.specialization;
        document.getElementById('guideTour').textContent = guide.tourDescription;
        document.getElementById('guideLanguages').textContent = `Языки: ${guide.languages.join(', ')}`;
    }
});