import React from "react";

import '../../styles/text/__text';
import '../../styles/text/__text_name';
import '../../styles/text/__text_nameDiscription';
import '../../styles/text/__text_diploms';
import '../../styles/text/__text_services';

export default function Text({typeTag, id, children}){
let classCase;

switch (id) {
    case 'name':
        classCase={className:'name'};
        break;
    case 'nameDiscription':
        classCase={className:'nameDiscription'};
        break;
    case 'diploms':
        classCase={className:'diploms'};
        break;
    case 'services':
        classCase={className:'services'};
        break;
}

    return React.createElement(typeTag,classCase, children);
}