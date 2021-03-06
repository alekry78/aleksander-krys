import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 10px;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  width: 100vw;
  height: 100vh;
  background-color: #1F2124;
  color: #FFFFF3;
}

#root {
  width: 100%;
  height: 100%;
}

/* 100 */
a {
  text-decoration: none;
  color: #FFFFF3;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

.fade-appear {
  opacity: 0;
  z-index: 1;
  transform: scale(0.9);
}

.fade-appear.fade-appear-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 1000ms ease-in-out, transform 1000ms ease-in-out;
}

.fade-enter {
  opacity: 0;
  z-index: 100;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms linear 300ms;
}

.fade-exit {
  opacity: 1;
}

.fade-exit.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms linear;
}

.fade-exit-done {
  opacity: 0;
}


`
