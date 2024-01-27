import React from "react";

import '../../styles/list_component/__list';
import '../../styles/container/__container';
import '../../styles/list_component/__list_backgroundbrown';
import '../../styles/list_component/__list_nonmarkers';
import '../../styles/list_component/__list_evenlistitem';
import '../../styles/list_component/__list_roundmarkers';

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
      const workPlanList2 = [
        '1 час занятия формате видео разговора и при необходимости работа с собакой в прямом эфире',
        'Тезисная фиксация сказанной на занятии информации',
        'Дополнительные полезные материалы',
        'Домашнее задание',
        'Обратная связь в течение 10 дней после занятия'
      ];
      const workPlanList3 = [
        '4 занятия по 1 часу в формате видео разговора и при необходимости работа с собакой в прямом эфире',
        'Разработка индивидуального плана работы',
        'Коррекция индивидуального плана и промежуточный контроль результатов',
        'Тезисная фиксация сказанной на занятии информации',
        'Домашние задания с проверкой',
        'Обратная связь в течение 1 месяца занятий'
      ];
      const workPlanList4 = [
        '1,5 часа занятия с выездом к вам',
        'Разработка индивидуального плана работы',
        'Тезисная фиксация сказанной на занятии информации',
        'Дополнительные полезные материалы',
        'Домашнее задание',
        'Обратная связь в течение 5 дней после занятия'
      ];
      const workPlanList5 = [
        '1 часа занятия с выездом к вам',
        'Тезисная фиксация сказанной на занятии информации',
        'Дополнительные полезные материалы',
        'Домашнее задание',
        'Обратная связь в течение 10 дней после занятия'
      ];
      const workStadeList = [
        'Связь со мной',
        'Напишите ваш запрос мне в Whats App, Telegram или Instagram.',
        'Подбор удобного времени и оплата занятия',
        'Вместе мы подберем наиболее удобное время для занятия. Время закрепляется за вами после внесения предоплаты в размере 100% от стоимости занятия или пакета занятий.',
        'Заполнение анкеты',
        'Перед первым занятием я отправляю вам анкету с вопросами, на которые необходимо будет ответить до занятия.',
        'Подготовка к занятию',
        'Заполненная вами анкета поможет мне разобраться в ваших проблемах с собакой и предложить наилучшие решения этих проблем.',
        'Первое онлайн-занятие',
        'Мы созваниваемся в Whats App или Telegram. На занятии мы разбираем причины проблемного поведения, я даю первые рекомендации и домашнее задание. После занятия я отправляю индивидуальный план работы и полезные материалы.',
        'Последующие онлайн-занятия',
        'Все последующие занятия будут направлены на работу по индивидуальному плану.'
      ];
      const additoinList = [
        'В  работе я придерживаюсь принципа НИМА (Наименьшая Интрузивность и Минимальная Аверсивность). Я не являюсь сторонницей теории доминирования. Не применяю в работе побои, рывки, альфа-перевороты и тому подобное. Не использую аверсивную амуницию - удавки, строгие ошейники, электрошоковые ошейники',
        'Я не консультирую по здоровью и питанию, спортивной, нормативной, защитной дрессировке',
        'Я не могу обозначить точное количество занятий, которое требуется для решение ваших проблем. Каждый случай индивидуален',
        'В процессе работы от вас может потребоваться проверка здоровья собаки и смена амуниции',
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
      } else if (id==='workplan2') {
        finalElement = ( <ul className="container">
        {workPlanList2.map((item, index) => (
          <li className="listComponent" key={index}>{item}</li>
        ))}
      </ul>)
      } else if (id==='workplan3') {
        finalElement = ( <ul className="container">
        {workPlanList3.map((item, index) => (
          <li className="listComponent" key={index}>{item}</li>
        ))}
      </ul>)
      }else if (id==='workStadeList') {
        finalElement = (
          <ol className="container">
            {workStadeList.map((item, index) => (
              <li className={`listComponent backgroundbrown nonmarkers ${index % 2 === 0 ? 'evenlistitem' : ''}`}
              key={index}>
                {index % 2 === 0 ? `${index / 2 + 1}. ${item}` : item}
              </li>
            ))}
          </ol>
        );
      } else if (id==='additoinList'){
        finalElement = ( <ul className="container">
        {additoinList.map((item, index) => (
          <li className="listComponent backgroundbrown roundmarkers" key={index}>{item}</li>
        ))}
      </ul>)
      } else if (id==='workplan4') {
        finalElement = ( <ul className="container">
        {workPlanList4.map((item, index) => (
          <li className="listComponent" key={index}>{item}</li>
        ))}
      </ul>)
      } else if (id==='workplan5') {
        finalElement = ( <ul className="container">
        {workPlanList5.map((item, index) => (
          <li className="listComponent" key={index}>{item}</li>
        ))}
      </ul>)
      }
      return (finalElement);
}