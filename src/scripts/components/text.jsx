import React from "react";

import '../../styles/text/__text';
import '../../styles/text/__text_name';
import '../../styles/text/__text_nameDiscription';
import '../../styles/text/__text_diploms';

export default function Text({id, children}){
let classCase;

switch (id) {
    case 'name':
        classCase='name';
        break;
    case 'nameDiscription':
        classCase='nameDiscription';
        break;
    case 'diploms':
        classCase='diploms';
        break;
}

    return(
        <p className={classCase}>
            {children}
        </p>
    );
}