import styled from 'styled-components'

// assets
import cardFrontBackground from '../../assets/images/bg-card-front.png'
import cardBackBackground from '../../assets/images/bg-card-back.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 180px;
`

const Card = styled.div`
  max-width: 24.84rem;
  height: 13.6rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  padding: 1.5rem;
`

export const CardFront = styled(Card)`
  background-image: url(${cardFrontBackground});
  margin-bottom: 2.3rem;
  display: flex;
  flex-direction: column;

  .card-logo {
    max-width: 84px;
    max-height: 47px;
    margin-bottom: 3.8rem;
  }

  .card-numbers,
  .client-name,
  .expiration-date {
    color: ${(props) => props.theme.lightGrayishViolet};
  }

  .client-name,
  .expiration-date {
    letter-spacing: 0.11rem;
    font-size: 0.75rem;
  }

  .card-numbers {
    font-size: 1.3rem;
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
`
