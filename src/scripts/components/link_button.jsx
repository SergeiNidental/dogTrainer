import React from "react";

export default function LinkButton({id, source}){
let messangerLink;
let finalElement;
    if(id==='whatsapp'){
     messangerLink = `https://wa.me/${source}`;
     finalElement = (<a href={messangerLink} target="_blank" rel="noopener noreferrer">
     Отправить сообщение в WhatsApp
     </a>);
    } else{
        messangerLink = `https://t.me/${source}`;
        finalElement = (<a href={messangerLink} target="_blank" rel="noopener noreferrer">
        Отправить сообщение в Telegram
      </a>);
    }

return (finalElement);
}