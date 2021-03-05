import React from 'react';
import Handleclick from './CalculatorFunctions/handleClick';
import HandleClickSecond from './CalculatorFunctions/HandleClickSecond';
import {BoxEquals, Line, SmallLine, Plus, CalcHome,Header,HeaderMini} from './CalculatorStyles';
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
        }
        this.setState({
            all:all
        })
    }
    render() {
        return (
            <CalcHome>
                <Header>Decimal Calculator</Header>
                <HeaderMini>Click a number in order to change it</HeaderMini>
                <Line>
                    <Handleclick handleClick={this.handleClick} number={0}/>
                    <Handleclick handleClick={this.handleClick} number={1}/>
                    <Handleclick handleClick={this.handleClick} number={2}/>
                    <Handleclick handleClick={this.handleClick} number={3}/>
                    <Handleclick handleClick={this.handleClick} number={4}/>
                    <Handleclick handleClick={this.handleClick} number={5}/>
                    <Handleclick handleClick={this.handleClick} number={6}/>
                    <Handleclick handleClick={this.handleClick} number={7}/>
                </Line>
                <Line>
                    <Plus onClick={this.addUnits}>+</Plus>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={0}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={1}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={2}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={3}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={4}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={5}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={6}/>
                    <HandleClickSecond handleClickSecond={this.handleClickSecond} number={7}/>
                </Line>
                <SmallLine/>
                <Line>
                    <BoxEquals>{this.state.all[0]}</BoxEquals>
                    <BoxEquals>{this.state.all[1]}</BoxEquals>
                    <BoxEquals>{this.state.all[2]}</BoxEquals>
                    <BoxEquals>{this.state.all[3]}</BoxEquals>
                    <BoxEquals>{this.state.all[4]}</BoxEquals>
                    <BoxEquals>{this.state.all[5]}</BoxEquals>
                    <BoxEquals>{this.state.all[6]}</BoxEquals>
                    <BoxEquals>{this.state.all[7]}</BoxEquals>
                    <BoxEquals>{this.state.all[8]}</BoxEquals>
                </Line>
            </CalcHome>

        )
    }
}


export default Calculators;