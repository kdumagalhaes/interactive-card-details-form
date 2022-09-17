import { ThemeProvider } from 'styled-components'
import { Template } from './components/template/Template'
import { GlobalStyles } from './styles/globalStyles'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Template />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
