import React from 'react';
import Navbar from '../Navbar/Navbar';
import {CSSTransition} from 'react-transition-group';
import Card from './Card'
import Calculators from "./ShowcaseComponents/DecimalCalculator/Calculators";
import BinaryCalc from "./ShowcaseComponents/BinaryCalculator/BinaryCalc";
import {Home ,Components, ArrowLeft, ArrowRight, TransitionContainer} from './ShowcaseStyles.js';
class Showcase extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    };
    tab = {
        "properties":[
            {
                "show":<Calculators/>,
                "index":0,
                "_id":0
            },
            {
                "show":<BinaryCalc/>,
                "index":1,
                "_id":1
            },
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
            <Home>
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <Components>
                        <ArrowLeft onClick={this.prevProperty} disabled={this.state.property.index === 0}/>
                        <TransitionContainer>
                            <CSSTransition key={this.state.property._id} timeout={600} classNames="fade">
                                <Card property={this.state}/>
                            </CSSTransition>
                        </TransitionContainer>
                        <ArrowRight onClick={this.nextProperty} disabled={this.state.property.index === this.tab.properties.length-1}/>
                    </Components>
                </CSSTransition>
            </Home>
        )
    }
}

export default Showcase;