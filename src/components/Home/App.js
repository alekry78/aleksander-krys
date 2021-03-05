import React from 'react';
import {CSSTransition} from 'react-transition-group';
import Navbar from '../Navbar/Navbar';
import { Home, Greeting, Const, MyName } from './AppStyles';
class App extends React.Component {
    changeSite = (name) => {
        this.props.history.push(name);
    }

    render() {
        return (
            <Home>
                <Navbar changeSite={this.changeSite}/>
                <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                    <Greeting>
                        <Const> const user = </Const>
                        <MyName>(...AleksanderKrys)</MyName>
                    </Greeting>
                </CSSTransition>
            </Home>
        )
    }
}

export default App;
