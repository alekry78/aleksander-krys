import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const NavHome = styled.nav`
height: 100%;
  width: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #151618;
  @media (max-width: 1200px) {
    width: 100%;
    height: 5em;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 1rem 0 1rem;
  }
`
export const Logo = styled.span`
font-size: 5rem;
@media (max-width: 1200px) {
    display: none;
  }
`
export const Icons = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: row;
  }
`
export const IconText = styled.span`
@media (max-width: 1200px) {
    display: none;
}
`
export const Socials = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
@media (max-width: 1200px) {
    display: none;
}
`
export const Icon = styled(FontAwesomeIcon)`
font-size: 2rem;
  padding: 2rem;
  position: relative;
  &:hover {
  color: #2EC4B6;
}
`