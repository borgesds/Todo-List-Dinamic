import styled from 'styled-components'

export const TaskContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: ${(props) => props.theme['gray-800']};

  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.75rem;
`

export const TaskContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
