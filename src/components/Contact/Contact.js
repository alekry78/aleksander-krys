import React from 'react';
import Navbar from "../Navbar/Navbar";
import {CSSTransition} from 'react-transition-group';
import emailjs from 'emailjs-com';
import {Home,Container,Form,InputName,InputEmail,InputText,Button} from "./ContactStyles";
class Contact extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_18wnq38', 'template_046aj5m', e.target, 'user_Rc2rHtrvugCe3P8A1BH0x')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    render(){
        return (
            <Home>
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <Container>
                        <Form onSubmit={this.handleSubmit}>
                            <InputName required type="text" name="name" placeholder="Name"  />
                            <InputEmail required type="email" name="email" placeholder="Your email"   />
                            <InputText required name="message" placeholder="Message"  />
                            <Button type="submit" className="form__button">Send</Button>
                        </Form>
                    </Container>
                </CSSTransition>
            </Home>
        )
    }

}

export default Contact;