import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;

  @media (max-width: 1095px) {
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    height: 100%;
    margin-top: 4.5rem;
  }

  .wrapper {
    width: 100%;
    max-width: 23rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .complete-icon {
    margin-bottom: 2rem;
  }

  .title {
    text-transform: uppercase;
    color: ${(props) => props.theme.darkViolet};
    font-size: 1.2rem;
    letter-spacing: 0.3rem;
    margin-bottom: 0.7rem;
  }

  .message {
    font-size: 0.9rem;
    color: ${(props) => props.theme.darkGrayishViolet};
    font-weight: 500;
    margin-bottom: 1.8rem;
  }
`
