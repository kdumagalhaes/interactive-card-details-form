import { Container } from './styles'

// components
import { SideBar } from '../SideBar/SideBar'
import { Form } from '../Form/Form'
import { FormConfirmation } from '../FormConfirmation/FormConfirmation'

export function Template() {
  return (
    <Container>
      <SideBar />
      <Form />
      <FormConfirmation />
    </Container>
  )
}
