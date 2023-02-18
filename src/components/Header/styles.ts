import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: linear-gradient(180deg, #0077b6 0%, #00b4d8 100%);
  padding: 1.25rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    color: #fff;
    font-size: 2rem;
  }
`

export const ButtonContainer = styled.button`
  background: ${(props) => props.theme['blue-700']};
  color: ${(props) => props.theme['gray-100']};
  border: 0;
  height: 50px;
  width: 200px;
  padding: 0 1.25rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme['blue-300']};
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme['blue-500']};
    border: 1px solid ${(props) => props.theme['blue-700']};
  }
`
