import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
`
