import React from "react";

import '../../styles/text/__text';
import '../../styles/text/__text_name';

export default function Text({id, children}){
let classCase;

switch (id) {
    case 'name':
        classCase='name';
        break;
}

    return(
        <p className={classCase}>
            {children}
        </p>
    );
}