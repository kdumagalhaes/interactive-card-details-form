import { Container } from './styles'

interface ButtonProps {
  text: string
  onClick?: () => void
}

export function Button({ text, onClick }: ButtonProps) {
  return <Container onClick={onClick}>{text}</Container>
}
