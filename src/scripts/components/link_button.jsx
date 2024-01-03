import React from "react";

import '../../styles/button/__button_link';

export default function LinkButton({id, source, children}){
let messangerLink;
let finalElement;
    if(id==='whatsapp'){
     messangerLink = `https://wa.me/${source}`;
     finalElement = (<a className="linkButton" href={messangerLink} target="_blank" rel="noopener noreferrer">
     {children}
     </a>);
    } else{
        messangerLink = `https://t.me/${source}`;
        finalElement = (<a className="linkButton" href={messangerLink} target="_blank" rel="noopener noreferrer">
        {children}
      </a>);
    }

return (finalElement);
}