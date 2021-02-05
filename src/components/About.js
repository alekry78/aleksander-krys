import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import {CSSTransition} from 'react-transition-group';

class About extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    }

    render() {
        return (
            <div className="about">
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <div className="aboutMe">
                        <div className="aboutContainer">
                            <h1 className="about__header">
                                Hi, here's something about me.
                            </h1>
                            <p className="about__text">
                                My name is Aleksander. I am 22 years old and I've been studying Front End technologies
                                for about
                                a year now. In a meantime I've been in college for one semester on IT profile but I
                                didnt' quite like it there.
                                I dropped out and went to work at McDonald's in my hometown. I worked there for about
                                1,5 years. While working
                                there I was promoted twice and ended up on Swing Manager position. My job was to manage
                                a different group of people
                                everyday, make sure every person on every position is doing well so they don't slow down
                                the restaurant, break up any
                                fights that would happen between members of the crew, take care of the whole
                                restaurant's state and eventually take
                                the blame if anything bad happened during my shift. Then I quit the job to pursue my
                                dream of becoming a Front End Developer.
                                I bought a 6 months long programming bootcamp at CodersLab's school and since then I am keep learning
                                everyday during our lessons and after
                                them. I spend approximately 10 hours a day learning new things, practicing and hoping to
                                get my dream job. This whole website
                                is built using React to showcase some of my skills. Switching sites is done with
                                React-router. I am C1 in English if someone is
                                interested.
                            </p>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default About;