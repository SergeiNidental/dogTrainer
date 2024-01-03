import React from "react";

import '../../styles/container/__container';
import '../../styles/container/__container_horizontal';
import '../../styles/container/__container_backgroundbrown';

export default function Container({id, children}){
 let finalClass;
 if (id==='horizontal'){
    finalClass = 'container horizontal'
 } else if(id==='backgroundBrown') {
    finalClass = 'container backgroundBrown';
 } else {
    finalClass = 'container';
 }
    return (
        <div className={finalClass}>
            {children}
        </div>
    )
}