import React from "react";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header/>
            <MobileNav/>
            <main>{ children }</main>
        </React.Fragment>
    )
}

export default Layout;
