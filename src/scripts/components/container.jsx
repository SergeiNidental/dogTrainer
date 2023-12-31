import React from "react";

import '../../styles/container/__container';

export default function Container({children}){

    return (
        <div className='container'>
            {children}
        </div>
    )
}