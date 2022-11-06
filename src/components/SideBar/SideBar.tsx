import { Container } from './styles'

// components
import { Cards } from '../Cards/Cards'

export function SideBar() {
  return (
    <>
      <Container role="sidebar">
        <Cards />
      </Container>
    </>
  )
}
