const data = {
    skills: [
        'HTML5 / CSS3',
        'Node.js',
        'JavaScript (ES6+)',
        'PHP / Laravel',
        'React / Next.js',
        'Git / GitHub',
        'TypeScript',
        'API / Интеграции',
        'Tailwind CSS',
        'Figma / UI/UX',
    ],
    projects: [
        ['Crossw.ru — Японские кроссворды', 'Онлайн-платформа с кроссвордами.', 'React,TypeScript,Zustand'],
        ['Интернет-магазин одежды', 'Магазин с корзиной, фильтрами, личным кабинетом и оплатой.', 'React,Node.js,MongoDB'],
        ['Travel Blog', 'Блог о путешествиях с подборками, категориями и удобной админ-панелью.', 'WordPress,PHP,SCSS'],
    ],
    services: [
        ['▣', 'Создание сайтов', 'Разработка современных сайтов под ключ', 'от 30 000 ₽'],
        ['▤', 'Верстка и интеграция', 'Адаптивная верстка любой сложности', 'от 15 000 ₽'],
        ['⚙', 'Доработка и поддержка', 'Исправление ошибок, доработка функционала', 'от 2 000 ₽/час'],
        ['▱', 'Консультации', 'Персональные консультации по проектам и технологиям', 'от 1 500 ₽/час'],
    ],
    reviews: [
        ['👨', 'Алексей — настоящий профессионал. Сайт получился быстрым, удобным и стильным. Рекомендую!', 'Иван П.', 'Директор, SkyLimit'],
        ['👩', 'Отличная работа и внимание к деталям. Всегда на связи и нацелен на результат.', 'Мария С.', 'Маркетолог'],
        ['🧔', 'Помог с техническими вопросами и оптимизацией. Будем работать дальше!', 'Дмитрий К.', 'Владелец, Store'],
    ],
    articles: [
        ['Как выбрать стек технологий для вашего проекта', '12 мая 2024'],
        ['10 способов ускорить загрузку сайта', '5 мая 2024'],
        ['Как построить успешную карьеру на фрилансе', '28 апр. 2024'],
    ],
};

document.querySelector('.skills__grid').innerHTML = data.skills
    .map(
        (skill, index) =>
            `<div class="skill"><span class="skill__icon">${['5', '⬡', 'JS', 'PHP', '⚛', '●', 'TS', '⌬', '≈', 'F'][index]}</span>${skill}</div>`,
    )
    .join('');

document.querySelector('#project-list').innerHTML = data.projects
    .map(
        (project) =>
            `<article class="card card--project"><div class="card__image"></div><div class="card__body"><h3 class="card__title">${project[0]}</h3><p class="card__text">${project[1]}</p><div class="tags">${project[2]
                .split(',')
                .map((tag) => `<span class="tag">${tag}</span>`)
                .join('')}</div><a class="card__link" href="#">Демо-версия ↗</a></div></article>`,
    )
    .join('');

document.querySelector('#service-list').innerHTML = data.services
    .map(
        (service) => `
            <article class="card service">
                <span class="service__icon">${service[0]}</span>
                <div>
                    <h3 class="card__title">${service[1]}</h3>
                    <p class="card__text">${service[2]}</p>
                    <span class="service__price">${service[3]}</span>
                </div>
            </article>
        `,
    )
    .join('');

document.querySelector('#review-list').innerHTML = data.reviews
    .map(
        (review) => `
            <article class="card review">
                <div class="review__top">
                    <span class="review__avatar">${review[0]}</span>
                    <p class="review__quote">${review[1]}</p>
                </div>
                <span class="review__name">${review[2]}</span>
                <span class="review__role">${review[3]}</span>
            </article>
        `,
    )
    .join('');

document.querySelector('#article-list').innerHTML = data.articles
    .map(
        (article, index) =>
            `<article class="article"><div class="article__image" style="filter: hue-rotate(${index * 35}deg)"></div><div><h3 class="article__title">${article[0]}</h3><span class="article__date">${article[1]}</span></div></article>`,
    )
    .join('');

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    burger.setAttribute('aria-expanded', nav.classList.contains('nav--open'));
});

nav.addEventListener('click', () => nav.classList.remove('nav--open'));

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    const button = event.currentTarget.querySelector('button');
    button.textContent = 'Сообщение отправлено ✓';
    button.disabled = true;
});
