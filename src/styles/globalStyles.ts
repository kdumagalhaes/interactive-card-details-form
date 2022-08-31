import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-size: 18px;
}
body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.veryDarkViolet};
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
    font-weight: 500;
    font-size: 1rem;
}
button {
    cursor: pointer;
}
`
