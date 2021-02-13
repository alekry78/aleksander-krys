import React from 'react';

class SpanBox extends React.Component {
    handleClick= () =>{
        this.props.handleChange(this.props.number)
    }
    render() {
        return(
            <span onClick={this.handleClick} className="box">{this.props.show}</span>
        )

    }
}
export default SpanBox