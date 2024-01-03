import React, {useState} from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import Header from '../../header/header';
import Img from "../img";
import Text from '../text';
import Accordeon from "../accordeon";
import Container from '../container';
import Button from '../button';
import Gallary from '../gallary';
import ButtonLink from '../link_button';

import '../../../styles/__main';
import '../../../styles/links/__links';

import avatar from '../../../img/avatar.jpg';
import whatsapp from '../../../img/whatsapp.svg';
import telegram from '../../../img/telegram.svg';
import facebook from '../../../img/facebook.svg';

export default function Home() {

const [state, setState] = useState([]);

    return (
        <>
      <Header>
        <Img src={avatar} alt="avatar" />
      </Header>
      <Text typeTag='h1' id='name'>
        ЕКАТЕРИНА НИДЕНТАЛЬ
      </Text>
      <Text typeTag='p' id='nameDiscription'>
      Дипломированный кинолог, специалист по работе с проблемным поведением, бытовому воспитанию и трюковой дрессировки
      </Text>
      <Container>
        <Button state={state} setState={setState} type='button' id='button1'>ПОДРОБНЕЕ ОБО МНЕ</Button>
        <Accordeon id='first'>
            Привет, друзья 😊<br  /><br  />
      ‌
            Меня зовут Екатерина Ниденталь.<br  /><br  />

            Уже 8 лет занимаюсь воспитанием и дрессировкой собак, окончила с отличием УЦ "Велес" по специальности «Кинология» и постоянно повышаю квалификацию - читаю литературу, посещаю курсы и семинары российских и иностранных специалистов.<br  /><br  />

            В работе использую современные гуманные методы. Для меня физическое и психологическое состояние собаки и её владельца в приоритете.<br  /><br  />

            Я не являюсь сторонницей теории доминирования. Не применяю в работе побои, рывки, альфа-перевороты и тому подобное. Не использую аверсивную амуницию - удавки, строгие ошейники, электрошоковые ошейники.<br  /><br  />

            Работаю с людьми и их собаками всех пород и возрастов.<br  /><br  />
            Занимаюсь очно в Ереване, а также онлайн по всему миру.<br  />

            Буду рада видеть вас на своих занятиях!
        </Accordeon>
      </Container>
      <Text typeTag='h2' id='services'>
        УСЛУГИ
      </Text>
      <Link to='online' className='link'>ОНЛАЙН-ЗАНЯТИЯ</Link><br  />
      <Link to='inPerson' className='link'>ОЧНЫЕ ЗАНЯТИЯ В МОНРЕАЛЕ</Link><br  />
      <Link to='express' className='link'>ЭКПРЕСС-КОНСУЛЬТАЦИИ</Link><br  />
      <Link to='calm' className='link'>КУРС ПО СПОКОЙСТВИЮ И САМОКОНТРОЛЮ</Link><br  />
      <Text typeTag='h2' id='reviews'>
        ОТЗЫВЫ УЧЕНИКОВ
      </Text>
      <Container>
      <Gallary id='reviews'/>
      </Container>
      <Text typeTag='h2' id='reviews'>
        ВОПРОСЫ И ОТВЕТЫ
      </Text>
      <Container>
        <Button state={state} setState={setState} type='question' id='question1'>
          Как я работаю?
        </Button>
        <Accordeon id='second'>
        В работе использую современные гуманные методы. Для меня физическое и психологическое состояние собаки и её владельца в приоритете.
Я не являюсь сторонницей теории доминирования. Не применяю в работе побои, рывки, альфа-перевороты и тому подобное. Не использую аверсивную амуницию - удавки, строгие ошейники, электрошоковые ошейники.
Работаю с людьми и их собаками всех пород и возрастов.<br  />

Провожу выездные занятия в Ереване, а также онлайн по всему миру.<br  />

Я не консультирую по здоровью и питанию, спортивной, нормативной, защитной дрессировке и не готовлю к выставкам.
        </Accordeon>
        <Button state={state} setState={setState} type='question' id='question2'>
          Как проходят занятия и консультации?
          </Button>
        <Accordeon id='second'>
        Очные и онлайн-занятия:
Перед началом работы я отправляю вам анкету для анализа проблем и оценки здоровья, питания, физического и эмоционального состояния собаки.
Далее мы подбираем удобное время для проведения занятия. Время закрепляется за вами после внесения предоплаты в размере 100% от стоимости занятия или пакета занятий.
В назначенное время мы созваниваемся в мессенджере или я приезжаю к вам.<br  />
На первом занятии мы разбираем причины проблемного поведения, обсуждаем план работы, я даю первые рекомендации и домашнее задание.
Последующие занятия направлены на работу по индивидуальному плану.<br  />
По итогам каждого занятия я отправляю тезисную фиксацию сказанной информации и полезные материалы.<br  />

Экспресс консультации:
Мы подбираем удобное время для проведения консультации. Время закрепляется за вами после внесения предоплаты в размере 100% от стоимости занятия или пакета занятий. В назначенное время мы созваниваемся в мессенджере.
        </Accordeon>
        <Button state={state} setState={setState} type='question' id='question3'>
          Сколько стоят занятия и консультации?
          </Button>
        <Accordeon id='second'>
        Первое онлайн-занятие - 2000 рублей<br  />
Каждое последующее онлайн-занятие - 1500 рублей<br  />
Пакет из 4 онлайн-занятий - 5500 рублей<br  />

Первое очное занятие в Ереване - 1990 рублей <br  />
Каждое последующее очное занятие в Ереване - 1490 рублей <br  />
Пакет из 4 очных занятий в Ереване - 5500 рублей<br  />

Экспресс-консультация - 790 рублей<br  />

Подробную информацию о каждом формате работы вы можете узнать в соответствующем разделе.<br  /> 
        </Accordeon>
        <Button state={state} setState={setState} type='question' id='question4'>
          Что может потребоваться в процессе работы?
          </Button>
        <Accordeon id='second'>
        В процессе работы от вас может потребоваться проверка здоровья собаки, а также смена амуниции.<br  /> 
        </Accordeon>
        <Button state={state} setState={setState} type='question' id='question5'>
          С какого возраста следует начинать работу со щенком?
          </Button>
        <Accordeon id='second'>
        Для того, чтобы избежать в будущем возникновения многих проблем поведения, работу со щенком следует начинать с момента его появления в новом доме.<br  /> 
        </Accordeon>
        <Button state={state} setState={setState} type='question' id='question6'>
          Есть ли смысл начинать работу уже со взрослой собакой?
          </Button>
        <Accordeon id='second'>
        В любом возрасте можно обучить собаку новому поведению или скорректировать имеющееся.<br  /> 
        </Accordeon>
        <Button state={state} setState={setState} type='question' id='question7'>
          Есть ли породы с которыми бесполезно работать?
          </Button>
        <Accordeon id='second'>
        Таких пород не существует. Абсолютно к каждой собаке можно найти подход, вне зависимости её породы, возраста или физического состояния.<br  /> 
        </Accordeon>
        <Button state={state} setState={setState} type='question' id='question8'>
          Что делать, если в ходе работы выяснится, что проблему невозможно решить?
          </Button>
        <Accordeon id='second'>
        Не бывает нерешаемых проблем. Если случится так, что проблема лежит вне моего профессионального поля, я обязательно направлю вас к нужному специалисту (ветеринару, врачу поведенческой медицины и т.п.).<br  /> 
        </Accordeon>
      </Container>
      <Text typeTag='h2' id='reviews'>
        ДЛЯ СВЯЗИ СО МНОЙ
      </Text>
      <Container id='horizontal'>
        <ButtonLink id='whatsapp' source='79923354779'>
        <Img src={whatsapp} alt="whatsapp" />
        </ButtonLink>
        <ButtonLink id='telegram' source='ENidental'>
        <Img src={telegram} alt="telegram" />
        </ButtonLink>
        <ButtonLink id='facebook' source='ENidental'>
        <Img src={facebook} alt="facebook" />
        </ButtonLink>
      </Container>
        </>
    )
}