import styled from 'styled-components'

import backgroundImgDesktop from '../../assets/images/bg-main-desktop.png'
import backgroundImgMobile from '../../assets/images/bg-main-mobile.png'

export const Container = styled.div`
  background-image: url(${backgroundImgDesktop});
  max-width: 27rem;
  height: 100vh;
  position: relative;

  @media (max-width: ${(props) => props.theme.mobile}) {
    background-image: url(${backgroundImgMobile});
    max-width: 100%;
    height: 13rem;
  }
`