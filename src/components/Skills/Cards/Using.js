import React from 'react';
import {Styled} from "../CVStyles";

class Using extends React.Component {
    render() {
        return(
            <Styled>
                {this.props.property.property3.title}
                {this.props.property.property3.show}
                {this.props.property.property3.text}
            </Styled>
        )
    }
}

export default Using