import React from "react";

import '../../styles/button/__button';

export default function Link({id, children}){

    return(
        <a href={id} className="button">
            {children}
        </a>
    )
}