import React, { useState, useEffect, useCallback } from "react";

import Header from './header/header';
import Img from "./components/img";
import Text from '../scripts/components/text';

import '../styles/__main';

import avatar from '../img/avatar.jpg';

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
      <Text>
        ЕКАТЕРИНА НИДЕНТАЛЬ
      </Text>
      <Text>
      Дипломированный кинолог, специалист по работе с проблемным поведением, бытовому воспитанию и трюковой дрессировки
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
