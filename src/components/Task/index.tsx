import { Trash } from 'phosphor-react'
import { TaskContainer, TaskContent } from './styles'

export function Task() {
  return (
    <TaskContainer>
      <TaskContent>
        <input type="checkbox" id="teste" />
        <label htmlFor="teste">Estudar React com o Next</label>
        <button>
          <Trash size={24} />
        </button>
      </TaskContent>
    </TaskContainer>
  )
}
