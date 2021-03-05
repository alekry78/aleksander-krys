import React from 'react';
import {Styled} from "../CVStyles";

class Logic extends React.Component {
    render() {
        return(
            <Styled>
                {this.props.property.property2.title}
                {this.props.property.property2.show}
                {this.props.property.property2.text}
            </Styled>
        )
    }
}

export default Logic