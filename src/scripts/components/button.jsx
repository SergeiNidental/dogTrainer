import React from "react";

import '../../styles/button/__button';

export default function Button({children}){

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

    return(
        <button className="button" onPointerDown={handleAccordeonClick}>{children}</button>
    )
}