import React from 'react';
import {Styled} from '../CVStyles'
class Styling extends React.Component {
    render() {
        return(
            <Styled>
                {this.props.property.property.title}
                {this.props.property.property.show}
                {this.props.property.property.text}
            </Styled>
        )
    }
}

export default Styling