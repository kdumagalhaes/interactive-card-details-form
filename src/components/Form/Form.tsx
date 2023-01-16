import { Container } from './styles'
import InputMask from 'react-input-mask'
import { useState, ChangeEvent, SyntheticEvent } from 'react'
import { useFormInfo } from '../../context/FormContext'
import { Button } from '../Button/Button'
import 'animate.css'

export function Form() {
  const { getFormInfo, getFormConfirmation, formInfo } = useFormInfo()

  const [data, setData] = useState({
    name: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    securityCode: '',
  })

  const handleData = (prop: string, event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [prop]: event.target.value })
  }

  const handleFormInfo = () => {
    getFormInfo(data)
  }

  const isNullish = Object.values(formInfo).every((value) => {
    if (value !== '') {
      return true
    }

    return false
  })

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    getFormConfirmation(isNullish)
  }

  return (
    <Container
      role="form container"
      className="animate__animated animate__fadeIn"
    >
      <form onKeyUp={handleFormInfo} onSubmit={handleFormSubmit}>
        <label htmlFor="name">Cardholder Name</label>
        <input
          id="name"
          type="text"
          maxLength={20}
          placeholder="e.g. Jane Appelseed"
          required
          onChange={(e) => handleData('name', e)}
          value={data.name}
        />
        <label htmlFor="card-number">Card Number</label>
        <InputMask
          mask="9999 9999 9999 9999"
          id="card-number"
          type="text"
          inputMode="numeric"
          placeholder="e.g. 1234 5678 9123 0000"
          required
          onChange={(e) => handleData('cardNumber', e)}
          value={data.cardNumber}
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
                onChange={(e) => handleData('expirationMonth', e)}
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
                onChange={(e) => handleData('expirationYear', e)}
                required
              />
            </div>
          </div>

          <div className="security-code-divider">
            <label htmlFor="security-code">CVC</label>
            <InputMask
              mask="999"
              id="security-code"
              inputMode="numeric"
              type="text"
              placeholder="e.g. 123"
              onChange={(e) => handleData('securityCode', e)}
              required
            />
          </div>
        </div>

        <Button text="Confirm" />
      </form>
    </Container>
  )
}
