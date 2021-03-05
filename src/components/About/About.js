import React from 'react';
import Navbar from '../Navbar/Navbar';
import {CSSTransition} from 'react-transition-group';
import {AboutHome,AboutMe,Container,Header,Text} from './AboutStyles';
class About extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    }

    render() {
        return (
            <AboutHome>
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <AboutMe>
                        <Container>
                            <Header>
                                Hi, here's something about me.
                            </Header>
                            <Text>
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
                                I bought a 6 months long programming bootcamp at CodersLab's school and since then I've been learning
                                everyday during our lessons and after
                                them. I spend approximately 10 hours a day learning new things, practicing and hoping to
                                get my dream job. This whole website
                                is built using React to showcase some of my skills. Switching sites is done with
                                React-router. I am C1 in English if someone is
                                interested.
                            </Text>
                        </Container>
                    </AboutMe>
                </CSSTransition>
            </AboutHome>
        )
    }
}

export default About;