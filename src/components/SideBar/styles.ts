import styled from 'styled-components'

import backgroundImgDesktop from '../../assets/images/bg-main-desktop.png'
import backgroundImgMobile from '../../assets/images/bg-main-mobile.png'

export const Container = styled.div`
  width: 100%;
  max-width: 49rem;
  background-image: url(${backgroundImgDesktop});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.mobile}) {
    background-image: url(${backgroundImgMobile});
    max-width: 100%;
    height: 13rem;
  }
`
