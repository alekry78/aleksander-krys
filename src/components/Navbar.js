import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser,faCode,faEnvelope,faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faGithub,faFacebookF,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
class Navbar extends React.Component {
    handleClick = (event) =>{
        this.props.changeSite(event.currentTarget.dataset.icon);
    }
    hamShow = () =>{
        console.log("Jestem tu");
    }
    render() {
        return(
            <nav className="navbar">
                <span className="logo">A</span>
                <div className="icons">
                    <FontAwesomeIcon icon={faHome} onClick={this.handleClick} name="Home" className="icon"/>
                    <span className="spanHome">Home</span>
                    <FontAwesomeIcon icon={faUser} onClick={this.handleClick} name="About" className="icon"/>
                    <span className="spanHome">About Me</span>
                    <FontAwesomeIcon icon={faCode} onClick={this.handleClick} name="CV" className="icon"/>
                    <span className="spanHome">Skills</span>
                    <FontAwesomeIcon icon={faDesktop} onClick={this.handleClick} name="Showcase" className="icon"/>
                    <span className="spanHome">Showcase</span>
                    <FontAwesomeIcon icon={faEnvelope} onClick={this.handleClick} name="Contact" className="icon contact"/>
                    <span className="spanHome">Contact</span>
                </div>
                <div className="socials">
                    <a href="https://github.com/alekry78"><FontAwesomeIcon icon={faGithub} className="icon"/></a>
                    <a href="https://www.facebook.com/olek.krys/"><FontAwesomeIcon icon={faFacebookF} className="icon"/></a>
                    <a href="https://www.linkedin.com/in/aleksander-kry%C5%9B-a488161b6/"><FontAwesomeIcon icon={faLinkedinIn} className="icon"/></a>
                </div>
            </nav>
        )
    }
}
export default Navbar;