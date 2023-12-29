import React, { useState, useEffect, useCallback } from "react";

import Header from './header/header';
import Img from "./components/img";
import Text from '../scripts/components/text';

import '../styles/__main';

import avatar from '../img/avatar.jpg';

import Accordeon from "./components/accordeon";
import Container from '../scripts/components/container';
import Button from '../scripts/components/button';

export default function App() {
//   const [uList, setUList] = useState([]);
//   const [inputState, setInputState] = useState("");

//   useEffect(() => {
//     const uListstored = JSON.parse(localStorage.getItem("uList"));
//     const inputStatestored = JSON.parse(localStorage.getItem("inputState"));
//     if (uListstored && uListstored.length > 0) {
//       setUList(uListstored);
//     }
//     if (inputStatestored && inputStatestored !== "") {
//       setInputState(inputStatestored);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("uList", JSON.stringify(uList));
//     localStorage.setItem("inputState", JSON.stringify(inputState));
//   }, [uList, inputState]);

//   const handleOnChangeLine = useCallback(
//     (e) => {
//       setInputState(e.target.value);
//     },
//     [inputState]
//   );
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
      {/* <Form isQuestForm={true}>
        <Input
          type="text"
          placeholder="Add a new task"
          inputState={inputState}
          setInputState={setInputState}
          onChangeLine={handleOnChangeLine} // TODO: USECALLBACK done
        />
        <Button
          type="button"
          uList={uList}
          setUList={setUList}
          inputState={inputState}
          setInputState={setInputState}
        >
          <Img src={plus} alt="plus" />
        </Button>
      </Form>
      <Form isQuestForm={false}>
        <Counter uList={uList} />
        <Preview uList={uList} />
        <Task uList={uList} setUList={setUList} />
      </Form> */}
    </>
  );
}
