import React from 'react';
import {Box} from './BoxesStyles';
class SpanBox extends React.Component {
    handleClick= () =>{
        this.props.handleChange(this.props.number)
    }
    render() {
        return(
            <Box onClick={this.handleClick}>{this.props.show}</Box>
        )

    }
}
export default SpanBox