import { Component } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";

export class UserRegister extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MobileNav/>
                User register page
                <Footer/>
            </div>
        )
    }
}
