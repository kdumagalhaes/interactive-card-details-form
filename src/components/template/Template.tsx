import { Container } from './styles'
import { useFormInfo } from '../../context/FormContext'

// components
import { SideBar } from '../SideBar/SideBar'
import { Form } from '../Form/Form'
import { FormConfirmation } from '../FormConfirmation/FormConfirmation'

export function Template() {
  const { isConfirmed } = useFormInfo()

  return (
    <Container>
      <SideBar />
      {isConfirmed ? <FormConfirmation /> : <Form />}
    </Container>
  )
}
