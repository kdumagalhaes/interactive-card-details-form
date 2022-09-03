import { Button, Container } from './styles'
import InputMask from 'react-input-mask'

export function Form() {
  return (
    <Container>
      <form action="">
        <label htmlFor="name">Cardholder Name</label>
        <input
          id="name"
          type="text"
          maxLength={20}
          placeholder="e.g. Jane Appelseed"
          required
        />
        <label htmlFor="card-number">Card Number</label>
        <InputMask
          mask="9999 9999 9999 9999"
          id="card-number"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="e.g. 1234 5678 9123 0000"
          required
        />
        <div className="wrapper">
          <div className="expiration-date">
            <label htmlFor="expiration-month">Exp. date (MM/YY)</label>
            <div className="divider">
              <InputMask
                mask="0-12"
                id="expiration-month"
                className="expiration-month"
                type="number"
                pattern="[0-9]*"
                placeholder="MM"
                min={1}
                max={12}
                required
              />
              <label htmlFor="expiration-year">(MM/YY)</label>
              <input
                id="expiration-year"
                className="expiration-year"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="YY"
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
