import { executors } from './executors.js';

// Отримуємо посилання на випадаючий список
const executorSelect = document.getElementById('executor');
// const printBtn = document.getElementById('print-button');
const actFormElement = document.getElementById('actForm');
const executorData = executors[0];

// Перебираємо масив виконавців і додаємо їх до випадаючого списку
executors.forEach(executor => {
  const option = document.createElement('option');
  option.value = executor.id;
  option.textContent = executor.name;
  executorSelect.appendChild(option);
});

actFormElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  const actHTML = createMarkup(formData, executorData);

  const actContainer = document.querySelector('.print-act-text');
  actContainer.innerHTML = actHTML;

  // const printButton = document.createElement('button');
  // printButton.textContent = 'Print Document';
  // printButton.addEventListener('click', function () {
  //   window.print();
  // });
  // actContainer.appendChild(printButton);
});

function createMarkup(formData, executorData) {
  const actText = `
<div class="print-act">
      <h2 class="print-act-title">
        <span class="print-act-title-span">АКТ</span>
         <br> здачі - приймання наданих
        послуг №${formData.get('act-number')} 
         <br> до Договору
        ${executorData.contractNumber} від ${executorData.contractDate}
      </h2>
      <h3 class="place-act">
        ${formData.get('act-place')}
        <span class="date-act">${formData.get('act-date')}</span>
      </h3>
      <p class="text-customer">
        <span class="name-customer">Благодійна організація “Центр освітніх ініціатив”,</span> надалі
        “Замовник”, в особі виконавчої директорки Шинаровської Олени Богданівни,
        що діє на підставі Статуту з однієї сторони, та
      </p>
      <p class="text-performer"></p>
        <span class="name-performer">${
          executorData.name
        },</span>надалі – «Виконавець», що діє на
        підставі виписки ЄДР, з іншої сторони, (в подальшому разом іменуються
        "Сторони", а кожна окремо – "Сторона"), склали цей акт про таке:
      </p>
      <ol class="act-number-list">
        <li class="act-number-item">
          <p>
            Виконавець надав для Замовника відповідно до Договору №${
              executorData.contractNumber
            } від ${executorData.contractDate} в
            рамках проєкту «Зміцнення спроможності молодих людей стати агентами
            змін через розвиток життєвих навичок підлітків та підтримку
            молодіжного активізму у 7-ми західних областях» такі послуги:
          </p>

          <p class="act-unmber-item">
            Планування, організації та здійснення навчально-виховної,
            організаційно-масової роботи у сфері позашкільної освіти в ${
              executorData.groupName
            } ${formData.get('planning-period')}
          </p>
          <p class="act-unmber-item">
            Проведення ${formData.get('group-classes')} регулярних гурткових
            занять
            <span class="text-sometimes-activies"
              >, ${formData.get('one-time-activities')} іншої активності</span
            >
            та залучення дітей, підлітків та молоді в кількості ${formData.get(
              'number-of-children'
            )} особи, з них -
            ${formData.get('unique-person')} унікальні особи.
          </p>
          <p class="act-period">
            <span class="act-period-text">Період надання послуг:</span>з ${formData.get(
              'period-start'
            )} по ${formData.get('period-end')}.
          </p>
        </li>
        <li class="act-number-item">
          <span class="service-cost">Вартість послуг:</span> ${formData.get(
            'service-cost'
          )}, без
          ПДВ.
          <p>Якість послуг відповідає вимогам замовника.</p>
          <p>Сторони взаємних претензій не мають.</p>
        </li>
        <li class="act-number-item">Цей Акт складено в 2-х примірниках.</li>
      </ol>
      <p class="act-text-center">
        Оплату здійснити за рахунок коштів проєкту «Зміцнення спроможності
        молодих людей стати агентами змін через розвиток життєвих навичок
        підлітків та підтримку молодіжного активізму у 7-ми західних областях»,
        що виконується за договором про надання субгранту
        No010UNICEF-1-01-03864/01 між Центром освітніх ініціатив та ІСАР
        «Єднання».
      </p>
      <ul class="parties-list">
        <li class="parties-item">
          <h3 class="parties-title">Замовник:</h3>
          <p>
            Благодійна організація «Центр освітніх ініціатив» просп. В’ячеслава
            Чорновола, 4, 79019 Львів ЄДРПОУ 23968135 IBAN UA 52 325365
            0000000260020047475 в АТ «Кредобанк» info@osvita.org __________
            Олена ШИНАРОВСЬКА
          </p>
        </li>
        <li class="parties-item">
          <h3 class="parties-title">Виконавець:</h3>
          <p>
            ${executorData.name}
             ${executorData.address}
            ${executorData.identificationCode} 
            ${executorData.bankAccount}
            ${executorData.email}
             ${executorData.signature}
          </p>
        </li>
      </ul>
    </div>

`;
  return actText;
}
