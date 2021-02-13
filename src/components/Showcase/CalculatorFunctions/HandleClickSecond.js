import React from 'react';

class HandleClickSecond extends React.Component {
    oneRef=React.createRef();
    handleClickSecond = () => {
        this.props.handleClickSecond(this.props.number,this.oneRef.current.innerText);
    }
    render() {
        return (
            <span onKeyPress={this.handleClickSecond} onBlur={this.handleClickSecond} contentEditable="true" ref={this.oneRef} suppressContentEditableWarning={true} className="box">0</span>
        )
    }

}
export default HandleClickSecond