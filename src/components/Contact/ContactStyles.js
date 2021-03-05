import styled from 'styled-components';

export const Home = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:1200px) {
    flex-direction: column;
  }
`
export const Container = styled.div`
 flex-grow: 1;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 65%;
  box-shadow: 0 42px 31px rgba(0, 0, 0, 1);
  background-color: #FFFFF3;
  @media (max-width: 1200px) {
    width: 90%;
    height: 80%;
  }
`
export const InputName = styled.input`
 width: 60%;
  height: 5rem;
  border: none;
  border-bottom: 2px solid #2EC4B6;
  font-size: 3rem;
  margin: 2rem;
  font-family: 'Roboto Mono', monospace;
  color: #151618;
  @media (max-width: 1200px) {
    width: 90%;
  }
  &:focus{
  outline: none;
  }
`
export const InputEmail = styled.input`
width: 60%;
  height: 5rem;
  font-size: 3rem;
  border: none;
  margin: 2rem;
  border-bottom: 2px solid #2EC4B6;
  font-family: 'Roboto Mono', monospace;
  color: #151618;
  @media (max-width: 1200px) {
    width: 90%;
  }
  &:focus{
  outline: none;
  }
`
export const InputText = styled.textarea`
 width: 60%;
  height: 30%;
  border: none;
  border-bottom: 2px solid #2EC4B6;
  font-family: 'Roboto Mono', monospace;
  color: #151618;
  resize: none;
  overflow: auto;
  @media (max-width: 1200px) {
    width: 90%;
  }
  &:focus{
  outline: none;
  }
`
export const Button = styled.button`
text-transform: uppercase;
  border: none;
  margin-top: 2rem;
  background-color: #2EC4B6;
  color: #FFFFF3;
  padding: 2rem 4rem 2rem 4rem;
`