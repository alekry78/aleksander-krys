import React from 'react';
import Navbar from "./Navbar";
import {CSSTransition} from 'react-transition-group';
import emailjs from 'emailjs-com';
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
            <div className="Contact__homepage">
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <div className="Contact__container">
                        <form className="Contact__form" onSubmit={this.handleSubmit}>
                            <input required type="text" name="name" className="form__name" placeholder="Name"  />
                            <input required type="email" name="email" className="form__email" placeholder="Your email"   />
                            <textarea required className="form__text" name="message" placeholder="Message"  />
                            <button type="submit" className="form__button">Send</button>
                        </form>
                    </div>
                </CSSTransition>
            </div>
        )
    }

//     return (
// <div className="Contact__homepage">
// <Navbar changeSite={this.changeSite}/>
// <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
// <div className="Contact__container">
// <form action="/contact" className="Contact__form"  name="contact" method="POST">
// <input type="hidden" name="form-name" value="contact" />
// <input required type="text" name="name" className="form__name" placeholder="Name"  />
// <input required type="email" name="email" className="form__email" placeholder="Your email"   />
// <textarea required className="form__text" name="message" placeholder="Message"  />
// <button type="submit" className="form__button" onClick={this.handleClick}>Send</button>
// </form>
// </div>
// </CSSTransition>
// </div>
// )
// }
}

export default Contact;