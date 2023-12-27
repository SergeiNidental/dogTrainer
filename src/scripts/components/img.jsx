import React from "react";

import '../../styles/img/__img';
import '../../styles/img/__img_avatar';
import '../../styles/img/__img_1';

export default function Img({alt, src}){
    let classCase;
    switch(alt) {
        case 'avatar':
            classCase='avatar';
            break;
        case 'gallary':
            classCase='gallary';
            break;
    }

    return(
        <img className={classCase} src={src} alt={alt}></img>
    )
}