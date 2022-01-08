import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header/>
            <MobileNav/>
            <main>{ children }</main>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;
