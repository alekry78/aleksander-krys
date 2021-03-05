import React from 'react';
import {Box} from './HandleClickStyles';
class HandleClickSecond extends React.Component {
    oneRef=React.createRef();
    handleClickSecond = () => {
        this.props.handleClickSecond(this.props.number,this.oneRef.current.innerText);
    }
    render() {
        return (
            <Box onKeyPress={this.handleClickSecond} onBlur={this.handleClickSecond} contentEditable="true" ref={this.oneRef} suppressContentEditableWarning={true} className="box">0</Box>
        )
    }

}
export default HandleClickSecond