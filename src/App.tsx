import { ThemeProvider } from 'styled-components'
import { Template } from './components/template/Template'
import { FormProvider } from './context/FormContext'
import { GlobalStyles } from './styles/globalStyles'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FormProvider>
        <Template />
      </FormProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
