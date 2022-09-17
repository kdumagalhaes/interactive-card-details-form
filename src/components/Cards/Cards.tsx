import { CardBack, CardFront, Container } from './styles'

// assets
import cardLogo from '../../assets/images/card-logo.svg'
import { useFormInfo } from '../../context/FormContext'

export function Cards() {
  const { formInfo } = useFormInfo()

  const name = formInfo.name === '' ? 'Jane Appleseed' : formInfo.name

  return (
    <Container>
      <CardFront>
        <img src={cardLogo} alt="two white circles" className="card-logo" />
        <span className="card-numbers">0000000000000000</span>
        <div className="divider">
          <p className="client-name">{name}</p>
          <span className="expiration-date">00/00</span>
        </div>
      </CardFront>
      <CardBack>
        <span className="cvc-numbers">000</span>
      </CardBack>
    </Container>
  )
}
