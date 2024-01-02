import React, {useCallback, useEffect, useState, useMemo} from "react";

import Img from '../components/img';

import plus from '../../img/plus.svg';
import minus from '../../img/minus.svg';

import '../../styles/button/__button';
import '../../styles/button/__button_question';

export default function Button({state, setState, id, type, children}){

    let classNew;
    let renewedState;
    let curerentImg;

    const handleAccordeonClick = useCallback((elem,id, type) => {
        const currentTarget = elem.currentTarget;
        currentTarget.classList.toggle('active');
        const nextText = currentTarget.nextElementSibling;
        if (nextText.style.maxHeight) {
            nextText.style.maxHeight = null;
        } else {
            const nextTextHeight = nextText.scrollHeight;
            const windowHeight = window.innerHeight;
            if (windowHeight - nextTextHeight < nextText.getBoundingClientRect().top) {
                nextText.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            nextText.style.maxHeight = Math.min(nextTextHeight, windowHeight) + 'px';
        }

        if (type === 'question'){
            renewedState = state.map((item)=>{
                if(item.id === id){
                    if(item.active===true){
                        return{...item, active: false}
                    } 
                    return {...item, active:true};
                }
                return item;
            })
        }
        setState(renewedState);
    },[state]);

    useEffect(() => {
        if (type==='question' && setState){
        setState((prev) => {
          if (prev.some(item => item.id === id)) {
            // Если элемент с таким id уже существует в состоянии, возвращаем предыдущее состояние
            return prev;
          }
          // Иначе добавляем новый элемент
          return [...prev, { id, active: false }];
        });
      }}, [id, setState]);

    switch (type){
        case 'button':
            classNew = 'button';
            break;
        case 'question':
            classNew = 'button question';
            break;
    }
    const buttonState = state.find(item => item.id === id);

    if ( buttonState && buttonState.active === false){
        curerentImg=(<Img src={plus} alt='plus'/>);
    } else {
        curerentImg=(<Img src={minus} alt='minus'/>);
    }

      console.log(state);
    return(
        <button className={classNew} onPointerDown={(e) => handleAccordeonClick(e, id, type)}>{curerentImg}{children}</button>
    )
}