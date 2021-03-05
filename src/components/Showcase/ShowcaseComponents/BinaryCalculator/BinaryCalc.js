import React from 'react';
import SpanBox from './BinaryCalcFunctions/SpanBox';
import SpanBoxEquals from './BinaryCalcFunctions/SpanBoxEquals';
import {Line, SmallLine,CalcHome,Header,HeaderMini} from './BinaryCalcStyles';
class BinaryCalc extends React.Component {
    state = {
        first: [0,0,0,0,0,0,0,0],
        second: [0,0,0,0,0,0,0,0],
        all: [0,0,0,0,0,0,0,0,0]
    }
    handleChange = props =>{
        let first = this.state.first
        if(first[props] === 1){
            first[props] = 0
        }else{
            first[props]=1
        }
        this.setState({
            first:first
        })
        let all = [0,0,0,0,0,0,0,0,0]
        for(let i = this.state.first.length-1; i >= 0; i--){
            if((this.state.first[i] + this.state.second[i] + all[i+1]) === 0){
                all[i+1]=0
            }
            else if((this.state.first[i] + this.state.second[i] + all[i+1]) === 1){
                all[i+1] = 1
            }
            else if((this.state.first[i] + this.state.second[i] + all[i+1]) === 2) {
                all[i + 1] = 0
                all[i] = 1
            }
            else if((this.state.first[i] + this.state.second[i] + all[i+1]) === 3){
                all[i+1]=1;
                all[i] = 1;
            }
            this.setState({
                all:all
            })
        }

    }
    handleChangeSecond = props =>{
        let second = this.state.second
        if(second[props] === 1){
            second[props] = 0
        }else{
            second[props] = 1
        }
        this.setState({
            second:second
        })
        let all = [0,0,0,0,0,0,0,0,0]
        for(let i = this.state.first.length-1; i >= 0; i--){
            if((this.state.first[i] + this.state.second[i] + all[i+1]) === 0){
                all[i+1]=0
            }
            else if((this.state.first[i] + this.state.second[i] + all[i+1]) === 1){
                    all[i+1] = 1
            }
            else if((this.state.first[i] + this.state.second[i] + all[i+1]) === 2) {
                all[i + 1] = 0
                all[i] = 1
            }
            else if((this.state.first[i] + this.state.second[i] + all[i+1]) === 3){
                all[i+1]=1;
                all[i] = 1;
            }
            this.setState({
                all:all
            })
        }
    }
    render() {
        return (
            <CalcHome>
                <Header>Binary Calculator</Header>
                <HeaderMini>Click a bit in order to change it</HeaderMini>
                <Line>
                    <SpanBox handleChange={this.handleChange} number={0} show={this.state.first[0]}/>
                    <SpanBox handleChange={this.handleChange} number={1} show={this.state.first[1]}/>
                    <SpanBox handleChange={this.handleChange} number={2} show={this.state.first[2]}/>
                    <SpanBox handleChange={this.handleChange} number={3} show={this.state.first[3]}/>
                    <SpanBox handleChange={this.handleChange} number={4} show={this.state.first[4]}/>
                    <SpanBox handleChange={this.handleChange} number={5} show={this.state.first[5]}/>
                    <SpanBox handleChange={this.handleChange} number={6} show={this.state.first[6]}/>
                    <SpanBox handleChange={this.handleChange} number={7} show={this.state.first[7]}/>
                </Line>
                <Line>
                    <SpanBox handleChange={this.handleChangeSecond} number={0} show={this.state.second[0]}/>
                    <SpanBox handleChange={this.handleChangeSecond} number={1} show={this.state.second[1]}/>
                    <SpanBox handleChange={this.handleChangeSecond} number={2} show={this.state.second[2]}/>
                    <SpanBox handleChange={this.handleChangeSecond} number={3} show={this.state.second[3]}/>
                    <SpanBox handleChange={this.handleChangeSecond} number={4} show={this.state.second[4]}/>
                    <SpanBox handleChange={this.handleChangeSecond} number={5} show={this.state.second[5]}/>
                    <SpanBox handleChange={this.handleChangeSecond} number={6} show={this.state.second[6]}/>
                    <SpanBox handleChange={this.handleChangeSecond} number={7} show={this.state.second[7]}/>
                </Line>
                <SmallLine/>
                <Line>
                    <SpanBoxEquals show={this.state.all[0]}/>
                    <SpanBoxEquals show={this.state.all[1]}/>
                    <SpanBoxEquals show={this.state.all[2]}/>
                    <SpanBoxEquals show={this.state.all[3]}/>
                    <SpanBoxEquals show={this.state.all[4]}/>
                    <SpanBoxEquals show={this.state.all[5]}/>
                    <SpanBoxEquals show={this.state.all[6]}/>
                    <SpanBoxEquals show={this.state.all[7]}/>
                    <SpanBoxEquals show={this.state.all[8]}/>
                </Line>
            </CalcHome>
        )

    }
}

export default BinaryCalc;