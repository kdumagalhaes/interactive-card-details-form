import styled from 'styled-components'

export const Container = styled.main`
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

  form {
    display: flex;
    flex-direction: column;

    @media (max-width: ${(props) => props.theme.mobile}) {
      padding-bottom: 3rem;
    }

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
    }

    .expiration-year,
    .expiration-month {
      width: 4.7rem;

      @media (max-width: ${(props) => props.theme.mobile}) {
        width: 4.1rem;
      }
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

      @media (max-width: ${(props) => props.theme.mobile}) {
        margin-right: 0.7rem;
      }
    }

    input[id='security-code'] {
      @media (max-width: ${(props) => props.theme.mobile}) {
        width: 100%;
      }
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

      @media (max-width: ${(props) => props.theme.mobile}) {
        width: 100%;
      }
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
