import { Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { TaskContainer, TaskContent } from './styles'

interface TaskDynamicInterface {
  id: number
  descriptionTask: string
  time: number
}

export function TaskDynamic() {
  const [taskDescription, setTaskDescription] = useState<
    TaskDynamicInterface[]
  >([])

  async function loadTask() {
    const response = await fetch('http://localhost:3333/taskDynamic')
    const data = await response.json()

    setTaskDescription(data)
  }

  useEffect(() => {
    loadTask()
  }, [])

  return (
    <>
      {taskDescription.map((item) => {
        return (
          <TaskContainer key={item.id}>
            <TaskContent>
              <input type="checkbox" />
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
