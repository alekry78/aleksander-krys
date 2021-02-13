import React from 'react';

class Handleclick extends React.Component {
    oneRef=React.createRef();
    handleClick = () => {
        this.props.handleClick(this.props.number,this.oneRef.current.innerText);
    }
    render() {
        return (
            <span onKeyUp={this.handleClick} onBlur={this.handleClick} contentEditable="true" ref={this.oneRef} suppressContentEditableWarning={true} className="box">0</span>
        )
    }

}
export default Handleclick