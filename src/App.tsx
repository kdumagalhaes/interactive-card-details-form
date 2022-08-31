import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>salut</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
