import React from 'react';
import Navbar from "./Navbar";
import {CSSTransition} from 'react-transition-group';
class Contact extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name:'',
    //         email:'',
    //         message:''
    //     }
    // }
    // handleSubmit(event) {
    //     event.preventDefault()
    //     axios({
    //         method: "POST",
    //         url:"http://localhost:3002/send",
    //         data:  this.state
    //     }).then((response)=>{
    //         if (response.data.status === 'success') {
    //             alert("Message Sent.");
    //             this.resetForm()
    //         } else if(response.data.status === 'fail') {
    //             alert("Message failed to send.")
    //         }
    //     })
    // }
    // resetForm(){
    //     this.setState({name:'',email:'',message:''})
    // }
    handleClick = (e) =>{
        return e.preventDefault
    }

    render(){
        return (
            <div className="Contact__homepage">
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <div className="Contact__container">
                        <form action="/contact" className="Contact__form"  name="contact" method="POST">
                            <input type="hidden" name="form-name" value="contact" />
                            <input required type="text" name="name" className="form__name" placeholder="Name"  />
                            <input required type="email" name="email" className="form__email" placeholder="Your email"   />
                            <textarea required className="form__text" name="message" placeholder="Message"  />
                            <button type="submit" className="form__button" onClick={this.handleClick}>Send</button>
                        </form>
                    </div>
                </CSSTransition>
            </div>
        )
    }
    // onNameChange(event) {
    //     this.setState({name: event.target.value})
    // }
    //onSubmit={this.handleSubmit.bind(this)}
    //onChange={this.onNameChange.bind(this)}
    //onChange={this.onEmailChange.bind(this)}
    //onChange={this.onMessageChange.bind(this)}
    //value = {this.state.name}
    //value = {this.state.email}
    //value = {this.state.message}
    // onEmailChange(event) {
    //     this.setState({email: event.target.value})
    // }
    //
    // onMessageChange(event) {
    //     this.setState({message: event.target.value})
    // }

}

export default Contact;