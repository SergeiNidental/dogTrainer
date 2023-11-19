import React from "react";

import '../../styles/__header';

export default function Header( {children}) {
    return (
        <header className="header">{children}</header>
    );
}