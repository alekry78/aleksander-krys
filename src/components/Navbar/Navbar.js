import React from 'react';
import {faHome,faUser,faCode,faEnvelope,faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faGithub,faFacebookF,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {NavHome,Logo,Icons,IconText,Socials,Icon} from "./NavbarStyles";
class Navbar extends React.Component {
    handleClick = (event) =>{
        this.props.changeSite(event.currentTarget.dataset.icon);
    }
    hamShow = () =>{
        console.log("Jestem tu");
    }
    render() {
        return(
            <NavHome>
                <Logo>A</Logo>
                <Icons>
                    <Icon icon={faHome} onClick={this.handleClick} name="Home"/>
                    <IconText>Home</IconText>
                    <Icon icon={faUser} onClick={this.handleClick} name="About"/>
                    <IconText>About Me</IconText>
                    <Icon icon={faCode} onClick={this.handleClick} name="CV"/>
                    <IconText>Skills</IconText>
                    <Icon icon={faDesktop} onClick={this.handleClick} name="Showcase"/>
                    <IconText>Showcase</IconText>
                    <Icon icon={faEnvelope} onClick={this.handleClick} name="Contact"/>
                    <IconText>Contact</IconText>
                </Icons>
                <Socials>
                    <a href="https://github.com/alekry78"><Icon icon={faGithub}/></a>
                    <a href="https://www.facebook.com/olek.krys/"><Icon icon={faFacebookF}/></a>
                    <a href="https://www.linkedin.com/in/aleksander-kry%C5%9B-a488161b6/"><Icon icon={faLinkedinIn}/></a>
                </Socials>
            </NavHome>
        )
    }
}
export default Navbar;