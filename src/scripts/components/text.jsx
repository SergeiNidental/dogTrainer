import React from "react";

import '../../styles/text/__text';
import '../../styles/text/__text_name';
import '../../styles/text/__text_nameDiscription';
import '../../styles/text/__text_diploms';
import '../../styles/text/__text_services';
import '../../styles/text/__text_backgroundbrown';
import '../../styles/text/__text_bold_title';
import '../../styles/text/__text_thin_title';

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
    case 'reviews':
        classCase={className:'services'};
        break;
    case 'backgroundBrown':
        classCase={className:'textBackgroundColor'};
        break;
    case 'boldtitle':
        classCase={className:'boldtitle'};
        break;
    case 'thintitle':
        classCase={className:'thintitle'};
        break;
}

    return React.createElement(typeTag,classCase, children);
}