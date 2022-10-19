import { Container } from './styles'

import IconComplete from '../../assets/images/icon-complete.svg'
import { Button } from '../Button/Button'

export function FormConfirmation() {
  return (
    <Container>
      <img className="complete-icon" src={IconComplete} alt="complete icon" />
      <h1 className="title">Thank you!</h1>
      <p className="message">We've added your card details</p>
      <Button text="Continue" />
    </Container>
  )
}
