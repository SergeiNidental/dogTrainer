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
      const workPlanList = [
        '1.5 часа занятия формате видео разговора и при необходимости работа с собакой в прямом эфире',
        'Разработка индивидуального плана работы',
        'Тезисная фиксация сказанной на занятии информации',
        'Дополнительные полезные материалы',
        'Домашнее задание',
        'Обратная связь в течение 5 дней после занятия'
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
      } else if (id==='workplan') {
        finalElement = ( <ul className="container">
        {workPlanList.map((item, index) => (
          <li className="listComponent" key={index}>{item}</li>
        ))}
      </ul>)
      }
      return (finalElement);
}