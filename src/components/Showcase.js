import React from 'react';
import Navbar from './Navbar';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import Card from './Card'
import Number from "./Showcase/Number";
import Calculators from "./Showcase/Calculators";
import BinaryCalc from "./Showcase/BinaryCalc";
import Alexstagram from "./Showcase/Alexstagram";
class Showcase extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    };
    tab = {
        "properties":[
            {
                "show":<Number/>,
                "index":0,
                "_id":0
            },
            {
                "show":<Calculators/>,
                "index":1,
                "_id":1
            },
            {
                "show":<BinaryCalc/>,
                "index":2,
                "_id":2
            },
            {
                "show":<Alexstagram changeSite={this.changeSite}/>,
                "index":3,
                "_id":3
            }
        ]
    }
    state={
        property:this.tab.properties[0]
    }
    nextProperty = () =>{
        const newIndex = this.state.property.index+1
        this.setState({
            property:this.tab.properties[newIndex]
        })
    }
    prevProperty = () =>{
        const newIndex = this.state.property.index-1
        this.setState({
            property:this.tab.properties[newIndex]
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
                        <button className="arrowRight" onClick={this.nextProperty} disabled={this.state.property.index === this.tab.properties.length-1}/>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default Showcase;