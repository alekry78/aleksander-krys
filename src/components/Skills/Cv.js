import React from 'react';
import Navbar from "../Navbar/Navbar";
import {CSSTransition} from 'react-transition-group';
import Logic from './Cards/Logic';
import Styling from './Cards/Styling';
import Using from './Cards/Using';
import {Home, ArrowLeft, ArrowRight, TransitionContainer, Container, Slides,Image,Paragraph,HeaderOne} from './CVStyles';
import css from './icons/css.png';
import sass from './icons/sass.png';
import cssmodules from './icons/cssmodules.png';
import styledcomponents from './icons/styledcomponents.png';
import js from './icons/js.png';
import react from './icons/react.png';
import npm from './icons/npm.png';
import windows from './icons/windows.png';
import webpack from './icons/webpack.png';
import linux from './icons/linux.png';
import github from './icons/Github.png';
import git from './icons/git.png';
class CV extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    };
    tab = {
        "styling": [
            {
                "show": <Image src={css} alt="css"/>,
                "text":<Paragraph>Styling with pure CSS, using Flexbox and Grid, efficiently using pseudo-elements to style to keep code clean and readable, adding classes and ids only when needed</Paragraph>,
                "title":<HeaderOne>Styling</HeaderOne>,
                "index": 0,
                "_id": 0
            },
            {
                "show": <Image src={sass} alt="sass"/>,
                "text":<Paragraph>My preprocessor of choice is SASS, can switch to LESS if needed. Efficiently using @mixins, @includes, loops and much more. RWD is a priority. When using SASS I choose 'mobile-first' approach</Paragraph>,
                "title":<HeaderOne>Styling</HeaderOne>,
                "index": 1,
                "_id": 1
            },
            {
                "show": <Image src={cssmodules} alt="cssmodules"/>,
                "text":<Paragraph>Briefly tried it out on this site and I get how it works, now switched to styled-components</Paragraph>,
                "title":<HeaderOne>Styling</HeaderOne>,
                "index": 2,
                "_id": 2
            },
            {
                "show": <Image src={styledcomponents} alt="styledcomponents"/>,
                "text":<Paragraph>Big fan since I found out about it. It's used on this site. Familiar with Themes and GlobalStyles. My styling option of choice when using React</Paragraph>,
                "title":<HeaderOne>Styling</HeaderOne>,
                "index": 3,
                "_id": 3
            }
        ],
        "logic":[
            {
                "show": <Image src={js} alt="js"/>,
                "text":<Paragraph>Using vanilla JavaScript ES5 or ES6.Familiar with object-oriented programming. Familiar with constructor functions, prototyping, classes, declared functions, anonymous functions, arrow functions and much more.</Paragraph>,
                "title":<HeaderOne>Programming Language</HeaderOne>,
                "index": 0,
                "_id": 0
            },
            {
                "show": <Image src={react} alt="react"/>,
                "text":<Paragraph>My framework of choice. I know pretty solid basics of React: familiar with state, class or function components, hooks, event handling, lifecycles and Routing. Ready to study Redux. Using Atomic Design approach.</Paragraph>,
                "title":<HeaderOne>Programming Language</HeaderOne>,
                "index": 1,
                "_id": 1
            },
        ],
        "using":[
            {
                "show": <Image src={npm} alt="npm"/>,
                "text":<Paragraph>My package manager of choice. Never tried out yarn but I'm open to learn it if needed</Paragraph>,
                "title":<HeaderOne>Using</HeaderOne>,
                "index": 0,
                "_id": 0
            },
            {
                "show": <Image src={webpack} alt="webpack"/>,
                "text":<Paragraph>My JS bundler of choice.I used Gulp before for short period of time so I have basic knowledge of both</Paragraph>,
                "title":<HeaderOne>Using</HeaderOne>,
                "index": 1,
                "_id": 1
            },
            {
                "show": <Image src={git} alt="git"/>,
                "text":<Paragraph>I know solid basics of working with Git. I've worked on different branches and I know how to merge them. I know how to pull changes from branches of other people, how to push changes to the repository and how to create Pull Requests. I know the importance of commits and their descriptions</Paragraph>,
                "title":<HeaderOne>Using</HeaderOne>,
                "index": 2,
                "_id": 2
            },
            {
                "show": <Image src={github} alt="github"/>,
                "text":<Paragraph>My version control system of choice. Never used GitLab or Bitbucket but I'm willing to migrate if needed</Paragraph>,
                "title":<HeaderOne>Using</HeaderOne>,
                "index": 3,
                "_id": 3
            },
            {
                "show": <Image src={windows} alt="windows"/>,
                "text":<Paragraph>On my private computer I'm using Windows to work on code and Cmder as Console Emulator</Paragraph>,
                "title":<HeaderOne>Using</HeaderOne>,
                "index": 4,
                "_id": 4
            },
            {
                "show": <Image src={linux} alt="linux"/>,
                "text":<Paragraph>I've worked on Linux for a short period of time. I know the basics on how to maneuver between folders in the console and how to run applications through it. Overall I know only the basics</Paragraph>,
                "title":<HeaderOne>Using</HeaderOne>,
                "index": 5,
                "_id": 5
            }
        ]
    }
    state = {
        property: this.tab.styling[0],
        property2:this.tab.logic[0],
        property3:this.tab.using[0]
    }
    nextProperty = () => {
        const newIndex = this.state.property.index + 1
        this.setState({
            property: this.tab.styling[newIndex]
        })
    }
    prevProperty = () => {
        const newIndex = this.state.property.index - 1
        this.setState({
            property: this.tab.styling[newIndex]
        })
    }
    nextProperty2 = () => {
        const newIndex = this.state.property2.index + 1
        this.setState({
            property2: this.tab.logic[newIndex]
        })
    }
    prevProperty2 = () => {
        const newIndex = this.state.property2.index - 1
        this.setState({
            property2: this.tab.logic[newIndex]
        })
    }
    nextProperty3 = () => {
        const newIndex = this.state.property3.index + 1
        this.setState({
            property3: this.tab.using[newIndex]
        })
    }
    prevProperty3 = () => {
        const newIndex = this.state.property3.index - 1
        this.setState({
            property3: this.tab.using[newIndex]
        })
    }

    render() {
        return (
            <Home>
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <Container>
                        <Slides>
                            <ArrowLeft onClick={this.prevProperty} disabled={this.state.property.index === 0}/>
                            <TransitionContainer>
                                <CSSTransition key={this.state.property._id} timeout={600} classNames="fade">
                                    <Styling property={this.state}/>
                                </CSSTransition>
                            </TransitionContainer>
                            <ArrowRight onClick={this.nextProperty} disabled={this.state.property.index === this.tab.styling.length - 1}/>
                        </Slides>
                        <Slides>
                            <ArrowLeft onClick={this.prevProperty2} disabled={this.state.property2.index === 0}/>
                            <TransitionContainer>
                                <CSSTransition key={this.state.property2._id} timeout={600} classNames="fade">
                                    <Logic property={this.state}/>
                                </CSSTransition>
                            </TransitionContainer>
                            <ArrowRight onClick={this.nextProperty2} disabled={this.state.property2.index === this.tab.logic.length - 1}/>
                        </Slides>
                        <Slides>
                            <ArrowLeft onClick={this.prevProperty3} disabled={this.state.property3.index === 0}/>
                            <TransitionContainer>
                                <CSSTransition key={this.state.property3._id} timeout={600} classNames="fade">
                                    <Using property={this.state}/>
                                </CSSTransition>
                            </TransitionContainer>
                            <ArrowRight onClick={this.nextProperty3} disabled={this.state.property3.index === this.tab.using.length - 1}/>
                        </Slides>
                    </Container>
                </CSSTransition>
            </Home>

        )
    }
}

export default CV;