import { CardBack, CardFront, Container } from './styles'

// assets
import cardLogo from '../../assets/images/card-logo.svg'
import { useFormInfo } from '../../context/FormContext'

export function Cards() {
  const { formInfo } = useFormInfo()

  const clientName = formInfo.name === '' ? 'Jane Appleseed' : formInfo.name
  const cardNumbers =
    formInfo.cardNumber === '' ? '0000 0000 0000 0000' : formInfo.cardNumber
  const expirationMonth =
    formInfo.expirationMonth === '' ? '00' : formInfo.expirationMonth
  const expirationYear =
    formInfo.expirationYear === '' ? '00' : formInfo.expirationYear
  const cvcNumbers =
    formInfo.securityCode === '' ? '000' : formInfo.securityCode

  return (
    <Container role="cards container">
      <CardFront role="front card">
        <img src={cardLogo} alt="two white circles" className="card-logo" />
        <span className="card-numbers">{cardNumbers}</span>
        <div className="divider">
          <p className="client-name">{clientName}</p>
          <span className="expiration-date">
            {expirationMonth}/{expirationYear}
          </span>
        </div>
      </CardFront>
      <CardBack role="back card">
        <span className="cvc-numbers">{cvcNumbers}</span>
      </CardBack>
    </Container>
  )
}
