import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import Router from './components/Router';
import {GlobalStyle} from "./components/GlobalStyles/GlobalStyles";

ReactDOM.render(
    <>
    <GlobalStyle/>
    <Router/>
    </>,
  document.getElementById('root')
);

