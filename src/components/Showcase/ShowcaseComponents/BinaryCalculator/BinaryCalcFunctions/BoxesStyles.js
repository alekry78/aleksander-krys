import styled from 'styled-components';

export const Box = styled.span`
width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2EC4B6;
  font-size: 4rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
  @media (max-width: 1200px) {
    width:3.5rem;
    height:3.5rem;
    font-size:3rem;
    padding:0;
    margin:0.1rem 0.3rem;
  }
`
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