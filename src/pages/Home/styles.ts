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

export const CountTaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const SpanTaskTitle = styled.span`
  color: ${(props) => props.theme['blue-300']};
  padding-right: 1rem;
  font-size: 0.875rem;
  font-weight: bold;
`

export const SpanTaskCount = styled.span`
  color: ${(props) => props.theme['gray-300']};
  background: ${(props) => props.theme['gray-600']};
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 6px;
`
