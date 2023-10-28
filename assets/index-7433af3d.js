(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=c(s);fetch(s.href,n)}})();const a=[{id:5,contractNumber:"2023-09/01-10",contractDate:"01 вересня 2023 року",groupName:"гуртка художньо-естетичного напрямку «Творча майстерня»",name:"Фізична особа – підприємець Галушка Марія Володимирівна",address:"81400, Львівська обл., Самбірський р-н, м. Самбір, вулиця Шухевича, будинок 41/2",identificationCode:"РНОКПП 3200808243",bankAccount:"IBAN UA673220010000026008330153828 в АТ УНІВЕРСАЛ БАНК",email:"bura.marija1987@gmail.com",signature:"Марія ГАЛУШКА"}],o=document.getElementById("executor"),l=document.getElementById("actForm"),p=a[0];a.forEach(t=>{const e=document.createElement("option");e.value=t.id,e.textContent=t.name,o.appendChild(e)});l.addEventListener("submit",function(t){t.preventDefault();const e=new FormData(this);e.forEach((s,n)=>{});const c=u(e,p),i=document.querySelector(".print-act-text");i.innerHTML=c});function u(t,e){return`
<div class="print-act">
      <h2 class="print-act-title">
        <span class="print-act-title-span">АКТ</span>
         <br> здачі - приймання наданих
        послуг №${t.get("act-number")} 
         <br> до Договору
        ${e.contractNumber} від ${e.contractDate}
      </h2>
      <h3 class="place-act">
        ${t.get("act-place")}
        <span class="date-act">${t.get("act-date")}</span>
      </h3>
      <p class="text-customer">
        <span class="name-customer">Благодійна організація “Центр освітніх ініціатив”,</span> надалі
        “Замовник”, в особі виконавчої директорки Шинаровської Олени Богданівни,
        що діє на підставі Статуту з однієї сторони, та
      </p>
      <p class="text-performer"></p>
        <span class="name-performer">${e.name},</span>надалі – «Виконавець», що діє на
        підставі виписки ЄДР, з іншої сторони, (в подальшому разом іменуються
        "Сторони", а кожна окремо – "Сторона"), склали цей акт про таке:
      </p>
      <ol class="act-number-list">
        <li class="act-number-item">
          <p>
            Виконавець надав для Замовника відповідно до Договору №${e.contractNumber} від ${e.contractDate} в
            рамках проєкту «Зміцнення спроможності молодих людей стати агентами
            змін через розвиток життєвих навичок підлітків та підтримку
            молодіжного активізму у 7-ми західних областях» такі послуги:
          </p>

          <p class="act-unmber-item">
            Планування, організації та здійснення навчально-виховної,
            організаційно-масової роботи у сфері позашкільної освіти в ${e.groupName} ${t.get("planning-period")}
          </p>
          <p class="act-unmber-item">
            Проведення ${t.get("group-classes")} регулярних гурткових
            занять
            <span class="text-sometimes-activies"
              >, ${t.get("one-time-activities")} іншої активності</span
            >
            та залучення дітей, підлітків та молоді в кількості ${t.get("number-of-children")} особи, з них -
            ${t.get("unique-person")} унікальні особи.
          </p>
          <p class="act-period">
            <span class="act-period-text">Період надання послуг:</span>з ${t.get("period-start")} по ${t.get("period-end")}.
          </p>
        </li>
        <li class="act-number-item">
          <span class="service-cost">Вартість послуг:</span> ${t.get("service-cost")}, без
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
            ${e.name}
             ${e.address}
            ${e.identificationCode} 
            ${e.bankAccount}
            ${e.email}
             ${e.signature}
          </p>
        </li>
      </ul>
    </div>

`}
