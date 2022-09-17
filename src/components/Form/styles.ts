import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;

    label {
      text-transform: uppercase;
      font-size: 0.7rem;
      letter-spacing: ${(props) => props.theme.letterSpacing};
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.veryDarkViolet};
    }

    label[for='expiration-month'],
    label[for='security-code'] {
      width: 100%;
      display: block;
      margin-bottom: 0.5rem;
    }

    label[for='expiration-year'] {
      color: ${(props) => props.theme.white};
      font-size: 1px;
      position: absolute;
      left: 999px;
    }

    .expiration-year,
    .expiration-month {
      width: 4.7rem;
    }

    input {
      border: 1px solid ${(props) => props.theme.lightGrayishViolet};
      border-radius: 7px;
      padding: 0.5rem;
      margin-bottom: 1.3rem;

      &::placeholder {
        color: ${(props) => props.theme.lightGrayishViolet};
      }
    }

    .expiration-date {
      margin-right: 1rem;
    }

    .security-code-divider,
    .expiration-date {
      width: 100%;
    }

    .divider,
    .wrapper {
      display: flex;
    }

    .divider {
      gap: 0.5rem;
    }

    .wrapper {
      display: flex;
    }
  }
`

export const Button = styled.button`
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
