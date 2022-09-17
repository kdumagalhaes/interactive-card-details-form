import { Container } from './styles'

// components
import { SideBar } from '../SideBar/SideBar'
import { Form } from '../Form/Form'

export function Template() {
  return (
    <Container>
      <SideBar />
      <Form />
    </Container>
  )
}
