import styled from 'styled-components';

export const Home = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const Greeting = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    margin: 0;
  }
`
export const Const = styled.span`
font-size: 2rem;
  align-self: flex-end;
  @media (max-width: 700px) {
    display: none;
  }
`
export const MyName = styled.span`
font-size: 5rem;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`