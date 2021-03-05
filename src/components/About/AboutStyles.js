import styled from 'styled-components';

export const AboutHome = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const AboutMe = styled.div`
flex-grow: 1;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    margin: 0;
  }
`
export const Container = styled.div`
width: 70%;
  height: 70%;
  padding: 4rem;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
`
export const Header = styled.h1`
font-size: 4rem;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
  &:hover {
  transform: translateY(-20%);
  color: #2EC4B6;
  transition: transform 300ms linear, color 100ms linear;
  }
`
export const Text = styled.p`
font-size: 2rem;
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`