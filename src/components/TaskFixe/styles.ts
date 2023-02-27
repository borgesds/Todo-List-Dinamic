import styled from 'styled-components'

export const TaskContainer = styled.section`
  width: 100%;
  padding: 0.5rem;
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

  input {
    width: 15px;
    height: 15px;
  }

  label {
    margin-left: 2.25rem;
    font-size: 0.875rem;
  }

  input {
    cursor: pointer;
  }

  input:checked + label {
    color: ${(props) => props.theme['gray-500']};
    text-decoration: line-through;
  }

  button {
    border: 0;
    background: transparent;
    color: ${(props) => props.theme['red-500']};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['red-300']};
    }
  }
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
