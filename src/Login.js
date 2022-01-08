import { Component } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";

export class Login extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MobileNav/>
                Login Page
                <Footer/>
            </div>
        )
    }
}
