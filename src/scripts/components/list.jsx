import React from "react";

export default function ListComponent({id}){
    let finalElement;
    const behaviorsList = [
        'Тотальный игнор хозяина на прогулке',
        'Натяжение поводка',
        'Подбор мусора с земли',
        'Бурные реакции на других собак, людей, велосипеды и т.д.',
        'Прыжки на хозяев или гостей при встрече',
        'Попрошайничество и воровство еды со стола',
        'Страх расставания с хозяином и неумение оставаться в одиночестве',
        'Нечистоплотность',
        'Страхи, фобии и тревожность'
      ];
        if(id==='problemToResolve'){
            finalElement = ( <ul>
                {behaviorsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>)
      }
      return (finalElement);
}