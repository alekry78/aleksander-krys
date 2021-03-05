import styled from 'styled-components';

export const BoxEquals = styled.span`
width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2EC4B6;
  font-size: 5rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
  @media (max-width: 1200px) {
    padding:0;
    width:3.6rem;
    height:3.6rem;
    margin:0.2rem;
    font-size:3.5rem;
  }
`
export const CalcHome = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border: 6px solid #2EC4B6;
  border-radius: 10px;
  box-shadow: 0 0 10px #2EC4B6;
  margin: 1rem;
  position: absolute;
`
export const Line = styled.div`
 display: flex;
  justify-content: space-around;
  align-items: center;
`
export const SmallLine = styled.span`
width: 100%;
  height: 0.5rem;
  background-color: #2EC4B6;
`
export const Header = styled.h1`
font-size: 5rem;
  font-family: 'Roboto Mono', monospace;
  align-self: flex-start;
  margin: 0;
  margin-left: 1rem;
  @media (max-width: 1200px) {
    font-size:2rem;
  }
`
export const HeaderMini = styled.h3`
font-family: 'Roboto Mono', monospace;
  align-self: flex-start;
  margin: 0;
  margin-left: 1rem;
  font-size: 2rem;
  @media (max-width: 1200px) {
    font-size:1rem;
  }
`