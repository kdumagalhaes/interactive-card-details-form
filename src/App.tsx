import { ThemeProvider } from 'styled-components'
import { SideBar } from './components/SideBar/SideBar'
import { GlobalStyles } from './styles/globalStyles'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SideBar />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
