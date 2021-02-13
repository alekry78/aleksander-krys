import React from 'react';
import {CSSTransition} from 'react-transition-group';
import Navbar from './Navbar';

class App extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    }

    render() {
        return (
            <div className="homepage">
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <div className="greeting">
                        <span className="const"> const user = </span>
                        <span className="myName">(...AleksanderKrys)</span>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default App;
