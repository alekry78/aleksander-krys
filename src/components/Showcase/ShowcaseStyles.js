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
export const Components = styled.div`
flex-grow: 1;
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