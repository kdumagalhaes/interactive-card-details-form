import { Button, Container } from './styles'
import InputMask from 'react-input-mask'
import { useState, ChangeEvent } from 'react'
import { FormModel, useFormInfo } from '../../context/FormContext'

export function Form() {
  const { getFormInfo } = useFormInfo()

  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expirationMonth, setExpirationMonth] = useState('')
  const [expirationYear, setExpirationYear] = useState('')

  const handleFormInfo = () => {
    const formData: FormModel = {
      name,
      cardNumber,
      expirationMonth,
      expirationYear,
      securityCode: '',
    }

    getFormInfo(formData)
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value)
  }

  const handleExpirationMonth = (e: ChangeEvent<HTMLInputElement>) => {
    setExpirationMonth(e.target.value)
  }

  const handleExpirationYear = (e: ChangeEvent<HTMLInputElement>) => {
    setExpirationYear(e.target.value)
  }

  return (
    <Container>
      <form onKeyUp={handleFormInfo}>
        <label htmlFor="name">Cardholder Name</label>
        <input
          id="name"
          type="text"
          maxLength={20}
          placeholder="e.g. Jane Appelseed"
          required
          onChange={handleNameChange}
          value={name}
        />
        <label htmlFor="card-number">Card Number</label>
        <InputMask
          mask="9999 9999 9999 9999"
          id="card-number"
          type="text"
          inputMode="numeric"
          placeholder="e.g. 1234 5678 9123 0000"
          required
          onChange={handleCardNumber}
          value={cardNumber}
        />
        <div className="wrapper">
          <div className="expiration-date">
            <label htmlFor="expiration-month">Exp. date (MM/YY)</label>
            <div className="divider">
              <InputMask
                mask="99"
                id="expiration-month"
                className="expiration-month"
                type="text"
                inputMode="numeric"
                min={1}
                max={12}
                placeholder="MM"
                onChange={handleExpirationMonth}
                required
              />
              <label htmlFor="expiration-year">(MM/YY)</label>
              <InputMask
                mask="99"
                id="expiration-year"
                className="expiration-year"
                type="text"
                inputMode="numeric"
                placeholder="YY"
                onChange={handleExpirationYear}
                required
              />
            </div>
          </div>

          <div className="security-code-divider">
            <label htmlFor="security-code">CVC</label>
            <input
              id="security-code"
              inputMode="numeric"
              pattern="[0-9]*"
              type="text"
              placeholder="e.g. 123"
              required
            />
          </div>
        </div>

        <Button>Confirm</Button>
      </form>
    </Container>
  )
}
