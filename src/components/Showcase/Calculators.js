import React from 'react';
import Handleclick from './CalculatorFunctions/handleClick';
import HandleClickSecond from './CalculatorFunctions/HandleClickSecond';

class Calculators extends React.Component {

    state = {
        first: [0, 0, 0, 0, 0, 0, 0, 0],
        second: [0, 0, 0, 0, 0, 0, 0, 0],
        all: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    handleClick = (props, value) => {
        let first = this.state.first
        first[props] = parseFloat(value)
        if(first[props] > 9){
            first[props] = 9;
        }else if(first[props] < 0){
            first[props] = 0;
        }
        this.setState({
            first: first
        })
    }

    handleClickSecond = (props, value) => {
        let second = this.state.second
        second[props] = parseFloat(value)
        if(second[props] > 9){
            second[props] = 9;
        }else if(second[props] < 0){
            second[props] = 0;
        }
        this.setState({
            second:second
        })
    }
    addUnits = () =>{
        this.setState({
            all:[0, 0, 0, 0, 0, 0, 0, 0, 0]
        })
        let all = this.state.all
        let len = this.state.first.length
        for(let i = len -1 ; i > 0 ; i--){
            let sum = this.state.first[i] + this.state.second[i] + all[i+1];
            if(sum > 9){
                all[i+1] = sum%10;
                all[i] = 1;

            } else{
                all[i+1] = sum;
            }
            console.log(all,sum);
        }
        console.log(all);
        this.setState({
            all:all
        })
    }
    render() {
        return (
            <div className="Calculator">
                <h1 className="calculatorHeader">Decimal Calculator</h1>
                <h3 className="calculatorHeaderMin">Click a number in order to change it</h3>
                <div className="firstLine">
                    <Handleclick handleClick={this.handleClick} number={0}/>
                    <Handleclick handleClick={this.handleClick} number={1}/>
                    <Handleclick handleClick={this.handleClick} number={2}/>
                    <Handleclick handleClick={this.handleClick} number={3}/>
                    <Handleclick handleClick={this.handleClick} number={4}/>
                    <Handleclick handleClick={this.handleClick} number={5}/>
                    <Handleclick handleClick={this.handleClick} number={6}/>
                    <Handleclick handleClick={this.handleClick} number={7}/>
                </div>
                <div className="secondLine">
                    <span className="plus" onClick={this.addUnits}>+</span>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={0}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={1}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={2}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={3}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={4}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={5}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={6}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={7}/>
                </div>
                <span className="line"/>
                <div className="thirdLine">
                    <span className="boxEquals">{this.state.all[0]}</span>
                    <span className="boxEquals">{this.state.all[1]}</span>
                    <span className="boxEquals">{this.state.all[2]}</span>
                    <span className="boxEquals">{this.state.all[3]}</span>
                    <span className="boxEquals">{this.state.all[4]}</span>
                    <span className="boxEquals">{this.state.all[5]}</span>
                    <span className="boxEquals">{this.state.all[6]}</span>
                    <span className="boxEquals">{this.state.all[7]}</span>
                    <span className="boxEquals">{this.state.all[8]}</span>
                </div>
            </div>

        )
    }
}


export default Calculators;