import { CardBack, CardFront, Container } from './styles'

// assets
import cardLogo from '../../assets/images/card-logo.svg'

export function Cards() {
  return (
    <Container>
      <CardFront>
        <img src={cardLogo} alt="two white circles" className="card-logo" />
        <span className="card-numbers">0000000000000000</span>
        <div className="divider">
          <p className="client-name">Jane Appleseed</p>
          <span className="expiration-date">00/00</span>
        </div>
      </CardFront>
      <CardBack></CardBack>
    </Container>
  )
}
