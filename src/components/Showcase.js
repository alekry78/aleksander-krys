import React from 'react';
import Navbar from './Navbar';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import tab from './data';
import Card from './Card'
class Showcase extends React.Component {
    state={
        property:tab.properties[0]
    }
    changeSite = (name) => {
        this.props.history.push(name);
    };
    nextProperty = () =>{
        const newIndex = this.state.property.index+1
        this.setState({
            property:tab.properties[newIndex]
        })
    }
    prevProperty = () =>{
        const newIndex = this.state.property.index-1
        this.setState({
            property:tab.properties[newIndex]
        })
    }
    render() {
        return (
            <div className="showcase__homepage">
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <div className="showcase__components">
                        <button className="arrowLeft" onClick={this.prevProperty} disabled={this.state.property.index === 0}/>
                        <TransitionGroup className="app-container">
                            <CSSTransition key={this.state.property._id} timeout={600} classNames="fade">
                                <Card property={this.state}/>
                            </CSSTransition>
                        </TransitionGroup>
                        <button className="arrowRight" onClick={this.nextProperty} disabled={this.state.property.index === tab.properties.length-1}/>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default Showcase;