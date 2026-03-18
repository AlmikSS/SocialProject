const questions = [
  'Перед важной задачей у меня все вылетает из головы, мне кажется я тупею',
  'Ночью перед важным днем я не могу уснуть',
  'У меня дико стучит сердце если меня вызывают к доске',
  'Я не могу вслушаться в разговор, если переживаю из-за чего-то, мысли словно в другом месте',
  'У меня могут дрожать руки, когда зачитывают результаты или оценки',
  'Часто хочется просто валить и не участвовать во всем этом',
  'Я часто переживаю по пустякам, которые другие даже не замечают',
  'Я постоянно прокручиваю в голове разговоры из прошлого («надо было ответить иначе»)',
  'Даже когда я просто иду куда-то, мне кажется что окружающие меня оценивают',
  'Любая критика в мой адрес выбивает меня из колеи',
  'Когда все идет слишком хорошо, я жду подвоха',
  'Перед тем как сказать что-то, я несколько раз прокручиваю все в голове'
];

const answerOptions = [
  { label: 'нет, это не про меня', value: 0 },
  { label: 'возможно, иногда', value: 1 },
  { label: 'точно про меня', value: 2 }
];

const stateRecommendations = {
  intro:
    'Похоже, прямо сейчас ты испытываешь ситуативную тревогу — это естественная реакция организма на конкретные события (например, экзамен, контрольную или важный разговор). Хорошая новость в том, что с этим состоянием можно мягко и быстро справиться. Вот несколько способов, которые помогут тебе почувствовать себя лучше прямо здесь и сейчас или подготовиться к волнительному событию.',
  items: [
    {
      title: '1. Дыхательные техники',
      text: 'Когда мы тревожимся, дыхание становится поверхностным, и организм переходит в режим «бей или беги». Глубокое дыхание даёт обратный сигнал: «всё в порядке, можно расслабиться». Попробуйте дыхание по квадрату: вдох (4 сек) — задержка (4 сек) — выдох (4 сек) — задержка (4 сек). Это помогает выровнять сердечный ритм и успокоить нервную систему за пару минут.'
    },
    {
      title: '2. Физическая активность',
      text: 'Тревога — это энергия, которую организм выработал для защиты. Если не дать ей выхода, она будет «фонить» внутри и усиливать напряжение. Выйдите на быструю прогулку, сделайте лёгкую разминку или просто интенсивно встряхните руками и ногами. Даже несколько приседаний помогут сбросить лишний адреналин.'
    },
    {
      title: '3. Переключение внимания',
      text: 'Тревога часто зацикливает на одной и той же пугающей мысли. Чтобы разорвать этот круг, нужно мягко переключить фокус. Попробуйте технику заземления: найдите глазами 5 вещей, прикоснитесь к 4 предметам, услышьте 3 звука. Это возвращает вас в реальность и отвлекает от тревожных мыслей.'
    },
    {
      title: '4. Тайм-менеджмент и подготовка',
      text: 'Ситуативная тревога часто возникает из-за страха перед неизвестностью. Лучшее лекарство здесь — план. Разбейте большую задачу на маленькие шаги или распишите ближайший час. Когда вы видите структуру, мозг успокаивается: появляется ощущение контроля.'
    },
    {
      title: '5. Работа с мыслями',
      text: 'Тревога любит рисовать пугающие картины будущего. Попробуйте мягко вернуться в реальность: напомните себе, что эта ситуация временна и скоро закончится. Спросите: «Что я могу сделать прямо сейчас?». Если ничего — разрешите себе не контролировать то, что от вас не зависит.'
    },
    {
      title: '6. Экспресс-методы',
      text: 'Если тревога накрыла внезапно, попробуйте умыться холодной водой — это запускает рефлекс замедления сердцебиения. Или сильно напрягите всё тело на 5 секунд, а потом резко расслабьтесь. Это помогает сбросить мышечные зажимы и снизить напряжение за минуту.'
    }
  ]
};

const traitRecommendations = {
  intro:
    'Похоже, что для тебя тревожность — это не просто реакция на конкретное событие, а более устойчивая личностная особенность. Это значит, что ты склонен(а) воспринимать многие ситуации как угрожающие и часто чувствуешь напряжение даже там, где другие остаются спокойны.',
  items: [
    {
      title: '1. Развитие навыков саморегуляции',
      text: 'Саморегуляция — это умение замечать, что вы сейчас в тревоге, и мягко возвращать себя в равновесие. Помогают дыхательные практики, паузы, сканирование тела. Чем чаще вы тренируетесь замечать своё состояние, тем быстрее учитесь на него влиять.'
    },
    {
      title: '2. Формирование уверенности через достижимые цели',
      text: 'Тревогу часто питает ощущение «я не справлюсь». Чтобы это менять, ставьте маленькие, реалистичные задачи и замечайте, когда вы их выполнили. Даже мелкие победы (сделал уроки вовремя, вышел на прогулку) укрепляют внутреннюю опору.'
    },
    {
      title: '3. Работа с негативными мыслями',
      text: 'Тревожные мысли часто преувеличивают опасность. Попробуйте записывать свои страхи и анализировать: насколько реалистичен этот сценарий? Что скорее всего случится на самом деле? Постепенно можно учиться заменять пугающие ожидания более спокойными и взрослыми.'
    },
    {
      title: '4. Поддержка со стороны окружения',
      text: 'Тревога любит изоляцию и шепчет: «не грузи никого, справляйся сам». На самом деле простые разговоры с близкими — уже поддержка. Иногда достаточно сказать: «мне тревожно» — и уже становится легче. Доверительные отношения лечат.'
    },
    {
      title: '5. Соблюдение режима дня',
      text: 'Тревога любит хаос, а мозг — предсказуемость. Когда вы ложитесь и встаёте в разное время, нервная система живёт в режиме постоянной готовности. Постарайтесь выстроить стабильный ритм: достаточный сон и чередование учёбы с отдыхом — база, без которой остальные методы работают вполсилы.'
    }
  ]
};

function renderQuestions() {
  const container = document.querySelector('#questions');
  if (!container) return;

  container.innerHTML = '';

  questions.forEach((question, index) => {
    const card = document.createElement('article');
    card.className = 'question-card';

    const anxietyType = index < 6 ? 'Ситуативная тревожность' : 'Личностная тревожность';

    card.innerHTML = `
      <div class="question-card-header">
        <span class="question-number">${index + 1}</span>
        <div>
          <div class="question-text">${question}</div>
          <div class="question-meta eyebrow">${anxietyType}</div>
        </div>
      </div>
      <div class="answer-group">
        ${answerOptions
          .map(
            (option) => `
              <label class="answer-option">
                <input type="radio" name="q${index}" value="${option.value}" required />
                <span class="answer-label">${option.label}</span>
              </label>
            `
          )
          .join('')}
      </div>
    `;

    container.appendChild(card);
  });
}

function renderRecommendationBlock(container, data) {
  const intro = document.createElement('p');
  intro.className = 'result-summary';
  intro.textContent = data.intro;
  container.appendChild(intro);

  data.items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'recommendation-card';

    const title = document.createElement('h3');
    title.textContent = item.title;

    const text = document.createElement('p');
    text.textContent = item.text;

    card.append(title, text);
    container.appendChild(card);
  });
}

function setupSurvey() {
  const form = document.querySelector('#survey-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const answers = questions.map((_, index) => Number(formData.get(`q${index}`)));

    if (answers.some((value) => Number.isNaN(value))) {
      form.reportValidity();
      return;
    }

    const stateScore = answers.slice(0, 6).reduce((sum, value) => sum + value, 0);
    const traitScore = answers.slice(6).reduce((sum, value) => sum + value, 0);

    document.querySelector('#state-score').textContent = String(stateScore);
    document.querySelector('#trait-score').textContent = String(traitScore);

    const summary = document.querySelector('#result-summary');
    const recommendations = document.querySelector('#recommendations');
    summary.innerHTML = '';
    recommendations.innerHTML = '';

    const summaryText = document.createElement('p');
    summaryText.className = 'result-summary';
    summaryText.textContent =
      stateScore > traitScore
        ? 'Сейчас у тебя ярче проявляется ситуативная тревожность. Это значит, что сильнее всего напряжение включается в конкретных обстоятельствах и событиях.'
        : traitScore > stateScore
          ? 'Сейчас у тебя ярче проявляется личностная тревожность. Это значит, что тревожный фон может сопровождать тебя в разных ситуациях и восприниматься как более устойчивое состояние.'
          : 'Похоже, показатели ситуативной и личностной тревожности у тебя выражены примерно одинаково. Стоит обратить внимание и на текущие стрессовые ситуации, и на общий тревожный фон.';
    summary.appendChild(summaryText);

    if (stateScore >= traitScore) {
      renderRecommendationBlock(recommendations, stateRecommendations);
    }

    if (traitScore >= stateScore) {
      renderRecommendationBlock(recommendations, traitRecommendations);
    }

    const results = document.querySelector('#results');
    results.classList.remove('hidden');
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  items.forEach((item) => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuestions();
  setupReveal();
  setupSurvey();
});
