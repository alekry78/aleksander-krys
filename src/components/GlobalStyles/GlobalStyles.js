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

`
