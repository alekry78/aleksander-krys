import React from 'react';

class Number extends React.Component {
    numberRef = React.createRef();
    number2Ref = React.createRef();
    selectRef = React.createRef();
    state = {
        number1: 0,
        number2: 0,
        option: 0,
    };
    numberValue = () => {
        let number = this.state.number1;
        number = this.numberRef.current.value;
        this.setState({
            number1: number
        })

    }
    number2Value = () => {
        let number = this.state.number2;
        number = this.number2Ref.current.value;
        this.setState({
            number2: number
        })
    }
    optionValue = () => {
        let option = this.state.option;
        option = parseFloat(this.selectRef.current.value)
        this.setState({
            option: option
        })
    }

    render() {
        return(
                <div className="showcase__calculator">
                    <div className="number">
                        <input type="number" onChange={this.numberValue} ref={this.numberRef} className="orders"
                               placeholder="Number"/>
                        <span className="ordersShow">
                                <span>{this.state.number1} * 1.25$</span>
                                <span>=</span>
                                <span>{this.state.number1 * 1.25}$</span>
                            </span>
                    </div>
                    <div className="number">
                        <input type="number" onChange={this.number2Value} ref={this.number2Ref}
                               className="orders" placeholder="Number"/>
                        <span className="ordersShow">
                                <span>{this.state.number2} * 4$</span>
                                <span>=</span>
                                <span>{this.state.number2 * 4}$</span>
                            </span>
                    </div>
                    <div className="select">
                        <select className="selectForm" placeholder="Select" onChange={this.optionValue}
                                ref={this.selectRef}>
                            <option value={10}>Placeholder 1</option>
                            <option value={25}>Placeholder 2</option>
                            <option value={50}>Placeholder 3</option>
                        </select>
                        <span className="ordersShow">
                                <span>{this.state.option}$</span>
                            </span>
                    </div>
                    <span
                        className="total">Total = {((this.state.number1 * 1.25) + (this.state.number2 * 4) + (this.state.option))}$</span>
                </div>
        )
    }
}
export default Number;