import React from "react";

import '../../styles/button/__button';
import '../../styles/button/__button_question';

export default function Button({id, children}){

    let classNew;

    const handleAccordeonClick = (elem) => {
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

    }

    switch (id){
        case 'button':
            classNew = 'button';
            break;
        case 'question':
            classNew = 'button question';
            break;
    }

    return(
        <button className={classNew} onPointerDown={handleAccordeonClick}>{children}</button>
    )
}