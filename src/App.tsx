import { ThemeProvider } from 'styled-components'
import { Form } from './components/Form/Form'
// import { SideBar } from './components/SideBar/SideBar'
import { GlobalStyles } from './styles/globalStyles'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <SideBar /> */}
      <Form />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
