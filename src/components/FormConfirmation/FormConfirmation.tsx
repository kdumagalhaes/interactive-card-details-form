import { Container } from './styles'
import { useFormInfo } from '../../context/FormContext'

import IconComplete from '../../assets/images/icon-complete.svg'
import { Button } from '../Button/Button'
import { useState } from 'react'
import 'animate.css'

export function FormConfirmation() {
  const { getFormConfirmation } = useFormInfo()
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const handleButtonClick = () => {
    setIsButtonClicked(true)
    getFormConfirmation(isButtonClicked)
  }

  return (
    <Container className="animate__animated animate__fadeIn">
      <div className="wrapper">
        <img className="complete-icon" src={IconComplete} alt="complete icon" />
        <h1 className="title">Thank you!</h1>
        <p className="message">We've added your card details</p>
        <Button text="Continue" onClick={handleButtonClick} />
      </div>
    </Container>
  )
}
