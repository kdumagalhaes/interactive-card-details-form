import { Container } from './styles'

import IconComplete from '../../assets/images/icon-complete.svg'

export function FormConfirmation() {
  return (
    <Container>
      <img className="complete-icon" src={IconComplete} alt="complete icon" />
      <h1 className="title">Thank you!</h1>
      <p className="message">We've added your card details</p>
      <button>Continue</button>
    </Container>
  )
}
