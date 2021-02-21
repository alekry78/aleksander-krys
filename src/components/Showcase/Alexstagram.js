import React from 'react';
class Alexstagram extends React.Component {
    alexstagram = ()=>{
        this.props.changeSite("/alexstagram");
    }
    render() {
        return(
            <h1 className="gramLink" onClick={this.alexstagram}>Alexstagram</h1>
        )
    }
}

export default Alexstagram