import React from "react";

import '../../styles/img/__img';
import '../../styles/img/__img_avatar';
import '../../styles/img/__img_1';
import '../../styles/img/__plus';
import '../../styles/img/__minus';
import '../../styles/img/__img_messangers';
import '../../styles/img/__img_gallary';

export default function Img({alt, src}){
    let classCase;
    switch(alt) {
        case 'avatar':
            classCase='avatar';
            break;
        case 'gallary':
            classCase='gallary';
            break;
        case 'plus':
            classCase='plus';
            break;
        case 'minus':
            classCase='minus';
            break;
        case 'whatsapp':
            classCase='messangers';
            break;
        case 'telegram':
            classCase='messangers';
            break;
        case 'facebook':
            classCase='messangers';
            break;
    }

    return(
        <img className={classCase} src={src} alt={alt}></img>
    )
}