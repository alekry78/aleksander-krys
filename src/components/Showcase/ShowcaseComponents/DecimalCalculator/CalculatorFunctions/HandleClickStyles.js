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