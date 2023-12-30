import React, { useState, useEffect, useCallback } from "react";
import {Route, Routes} from 'react-router-dom';

import Home from '../scripts/components/pages/home';
import CalmAndSelfcontrol from './components/pages/calm_and_selfcontrol';
import ExpressTrenings from './components/pages/express_trenings';
import OnlineCourses from './components/pages/online_courses';
import PersonalTrenings from './components/pages/personal_trenings';

import '../styles/__main';

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
   <Routes>
      <Route path="/" element={<Home />}  /> 
      <Route path="/online" element={<OnlineCourses />} />
      <Route path="inPerson" element={<PersonalTrenings />} />
      <Route path="express" element={<ExpressTrenings />} />
      <Route path="calm" element={<CalmAndSelfcontrol />} />
   </Routes>
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
