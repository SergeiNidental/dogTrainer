import React from "react";

import '../../styles/list_component/__list';
import '../../styles/container/__container';
import '../../styles/list_component/__list_backgroundbrown';

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
      const youWillGetList = [
        'Понимание причин проблемного поведения своей собаки;',
        'Индивидуальный план работы',
        'Регулярные домашние задания с проверкой',
        'Обратную связь от меня',
        'Гарантированный результат при полном следовании рекомендациям',
      ];
        if(id==='problemToResolve'){
            finalElement = ( <ul className="container">
                {behaviorsList.map((item, index) => (
                  <li className="listComponent" key={index}>{item}</li>
                ))}
              </ul>)
      } else if (id==='whatyouwillget'){
        finalElement = ( <ul className="container">
        {youWillGetList.map((item, index) => (
          <li className="listComponent backgroundbrown" key={index}>{item}</li>
        ))}
      </ul>)
      }
      return (finalElement);
}