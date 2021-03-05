import React from 'react';
import {BoxEquals} from './BoxesStyles';
class SpanBoxEquals extends React.Component {
    render() {
        return(
            <BoxEquals className="boxEquals">{this.props.show}</BoxEquals>
        )

    }
}
export default SpanBoxEquals