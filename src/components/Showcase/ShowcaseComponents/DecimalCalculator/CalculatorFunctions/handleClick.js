import React from 'react';
import {Box} from './HandleClickStyles';
class Handleclick extends React.Component {
    oneRef=React.createRef();
    handleClick = () => {
        this.props.handleClick(this.props.number,this.oneRef.current.innerText);
    }
    render() {
        return (
            <Box onKeyUp={this.handleClick} onBlur={this.handleClick} contentEditable="true" ref={this.oneRef} suppressContentEditableWarning={true} className="box">0</Box>
        )
    }

}
export default Handleclick