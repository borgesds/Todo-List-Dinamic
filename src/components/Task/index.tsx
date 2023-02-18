import { Trash } from 'phosphor-react'
import { TaskContainer, TaskContent } from './styles'

export function Task() {
  return (
    <TaskContainer>
      <TaskContent>
        <input type="checkbox" id="key" />
        <label htmlFor="teste">
          Estudar React com o Next, aprimorar o back-end
        </label>
        <button>
          <Trash size={24} />
        </button>
      </TaskContent>
    </TaskContainer>
  )
}
