import React from "react";

import '../../styles/text/__text';
import '../../styles/text/__text_name';
import '../../styles/text/__text_nameDiscription';

export default function Text({id, children}){
let classCase;

switch (id) {
    case 'name':
        classCase='name';
        break;
    case 'nameDiscription':
        classCase='nameDiscription';
        break;
}

    return(
        <p className={classCase}>
            {children}
        </p>
    );
}