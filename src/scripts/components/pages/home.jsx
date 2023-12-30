import React from 'react';

import Header from '../../header/header';
import Img from "../img";
import Text from '../text';
import Accordeon from "../accordeon";
import Container from '../container';
import Button from '../button';
import Link from '../links';

import '../../../styles/__main';

import avatar from '../../../img/avatar.jpg';
import CustomLink from '../links';


export default function Home() {
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
        <Button>ПОДРОБНЕЕ ОБО МНЕ</Button>
        <Accordeon>
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
        Услуги
      </Text>
      <CustomLink id='online'>ОНЛАЙН-ЗАНЯТИЯ</CustomLink><br  /><br  />
      <CustomLink id='inPerson'>ОЧНЫЕ ЗАНЯТИЯ В МОНРЕАЛЕ</CustomLink><br  /><br  />
      <CustomLink id='express'>ЭКПРЕСС-КОНСУЛЬТАЦИИ</CustomLink><br  /><br  />
      <CustomLink id='calm'>КУРС ПО СПОКОЙСТВИЮ И САМОКОНТРОЛЮ</CustomLink>
        </>
    )
}