import React from 'react';

class Card extends React.Component {
    render() {
        return(
            <>
            {this.props.property.property.show}
            </>
        )
    }
}

export default Card