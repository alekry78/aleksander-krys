import styled from 'styled-components';
import {TransitionGroup} from 'react-transition-group';
export const Home = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`
export const ArrowLeft = styled.button`
  width: 5rem;
  height: 5rem;
  border: none;
  border-left: 1rem solid #2EC4B6;
  border-top: 1rem solid #2EC4B6;
  transform: rotate(-45deg);
  cursor: pointer;
  background: none;
  &:disabled{
  opacity:0.3;
  }
  &:focus{
  outline:none;
  }
`
export const ArrowRight = styled.button`
  width: 5rem;
  height: 5rem;
  border: none;
  border-left: 1rem solid #2EC4B6;
  border-top: 1rem solid #2EC4B6;
  cursor: pointer;
  background: none;
  transform: rotate(135deg);
  &:disabled{
  opacity:0.3;
  }
  &:focus{
  outline:none;
  }
`
export const TransitionContainer = styled(TransitionGroup)`
  position: relative;
  width: 80%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width:90%;
  }
`
export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width:1200px) {
    flex-direction: column;
    flex:grow:0;
    width:100vw;
    height:100vh;
    overflow:scroll;
    justify-content:space-between;
  }
`
export const Slides = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width:35rem;
`
export const Image = styled.img`
width:25rem;
height:25rem;

`
export const Paragraph = styled.p`
font-size:1.5rem;
`
export const Styled = styled.div`
position:absolute;
display:flex;
flex-direction:column;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
`
export const HeaderOne = styled.h1`
font-size:3rem;
text-transform:uppercase;
`