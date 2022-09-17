import { CardBack, CardFront, Container } from './styles'

// assets
import cardLogo from '../../assets/images/card-logo.svg'
import { useFormInfo } from '../../context/FormContext'

export function Cards() {
  const { formInfo } = useFormInfo()

  const clientName = formInfo.name === '' ? 'Jane Appleseed' : formInfo.name
  const cardNumbers =
    formInfo.cardNumber === '' ? '0000 0000 0000 0000' : formInfo.cardNumber

  return (
    <Container>
      <CardFront>
        <img src={cardLogo} alt="two white circles" className="card-logo" />
        <span className="card-numbers">{cardNumbers}</span>
        <div className="divider">
          <p className="client-name">{clientName}</p>
          <span className="expiration-date">00/00</span>
        </div>
      </CardFront>
      <CardBack>
        <span className="cvc-numbers">000</span>
      </CardBack>
    </Container>
  )
}
