import React from "react";
import { Link } from "react-router-dom";

import '../../styles/button/__button';

export default function CustomLink({id, children}){

    return(
        <Link to={id} className="button">
            {children}
        </Link>
    )
}