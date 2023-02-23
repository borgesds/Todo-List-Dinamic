import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import { TaskContainer, TaskContent } from './styles'

export function TaskFixe() {
  const { taskDescriptionFixed } = useContext(TaskContext)

  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxChange(event: any) {
    setIsChecked(event.target.checked)
  }

  /*  function handleToggleTask(id: number) {
    const taskListCompleted = taskDescription.map((task) => {
      if (task.id === id) {
        taskDescription.isCompleted = !task.isCompleted
      }
      return taskDescription
    })
  } */

  return (
    <>
      {taskDescriptionFixed.map((item) => {
        return (
          <TaskContainer key={item.id}>
            <TaskContent>
              <input type="checkbox" onChange={handleCheckboxChange} />
              <label>{item.descriptionTask}</label>
              <button>
                <Trash size={24} />
              </button>
            </TaskContent>
          </TaskContainer>
        )
      })}
    </>
  )
}
