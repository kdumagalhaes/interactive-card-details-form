import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.veryDarkViolet};
  color: ${(props) => props.theme.lightGrayishViolet};
  padding: 0.9rem 0;
  border: none;
  border-radius: 7px;
  transition: 0.4s;
  margin-top: 0.8rem;

  &:hover {
    background-color: ${(props) => props.theme.darkViolet};
  }
`
