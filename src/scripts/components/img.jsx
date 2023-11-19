import React from "react";

import '../../styles/img/__img';
import '../../styles/img/__img_avatar';

export default function Img({alt, src}){

    return(
        <img className="img avatar" src={src} alt={alt}></img>
    )
}