import styled from 'styled-components'

// assets
import cardFrontBackground from '../../assets/images/bg-card-front.png'
import cardBackBackground from '../../assets/images/bg-card-back.png'

export const Container = styled.div`
  width: 100%;
  max-width: 29.5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 1.8rem 1rem 0 1rem;
    left: 0;
    height: auto;
  }
`

const Card = styled.div`
  max-width: 24.84rem;
  height: 13.6rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  @media (max-width: ${(props) => props.theme.mobile}) {
    max-width: 15.25rem;
    background-size: 15.25rem;
    height: 8.35rem;
  }
`

export const CardFront = styled(Card)`
  background-image: url(${cardFrontBackground});
  margin-bottom: 2.3rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 1rem;
    position: relative;
    top: 100px;
  }

  .card-logo {
    max-width: 84px;
    max-height: 47px;
    margin-bottom: 3.8rem;

    @media (max-width: ${(props) => props.theme.mobile}) {
      max-width: 46px;
      max-height: 27px;
      margin-bottom: 2rem;
    }
  }

  .card-numbers,
  .client-name,
  .expiration-date {
    color: ${(props) => props.theme.lightGrayishViolet};
    letter-spacing: ${(props) => props.theme.letterSpacing};
  }

  .client-name,
  .expiration-date {
    font-size: 0.75rem;

    @media (max-width: ${(props) => props.theme.mobile}) {
      font-size: 0.5rem;
    }
  }

  .card-numbers {
    font-size: 1.3rem;

    @media (max-width: ${(props) => props.theme.mobile}) {
      font-size: 1rem;
    }
  }

  .client-name {
    text-transform: uppercase;
  }

  .divider {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }
`

export const CardBack = styled(Card)`
  background-image: url(${cardBackBackground});
  margin-left: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: ${(props) => props.theme.mobile}) {
    position: absolute;
    width: 100%;
    top: 30px;
    right: 20px;
    z-index: 0;
  }

  .cvc-numbers {
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    padding-right: 3rem;
    margin-bottom: 0.2rem;

    @media (max-width: ${(props) => props.theme.mobile}) {
      padding: 1.8rem;
      font-size: 0.5rem;
    }
  }
`
