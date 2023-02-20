import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme['gray-900']};
  padding: 96px;
  width: 100%;
  height: 100vh;
  margin-top: auto;
  position: relative;
  bottom: 0;
  left: 0;
`

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: auto;
  position: relative;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #fff;
    font-size: 0.8rem;
    padding-left: 0.5rem;
  }
`

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-400']};
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  span {
    font-size: 0.8rem;
    font-weight: bold;
    color: ${(props) => props.theme['blue-300']};
    padding-left: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    a {
      padding-bottom: 0.5rem;
      text-decoration: none;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.75rem;

      &:hover {
        color: ${(props) => props.theme['blue-500']};
      }
    }
  }
`
