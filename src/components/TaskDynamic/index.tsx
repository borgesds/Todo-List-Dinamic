import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import { TaskContainer, TaskContent, TaskTime } from './styles'

export function TaskDynamic() {
  const { taskDescriptionDynamic } = useContext(TaskContext)

  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxChange(event: any) {
    setIsChecked(event.target.checked)
  }

  return (
    <>
      {taskDescriptionDynamic.map((item) => {
        return (
          <section key={item.id}>
            <TaskTime>
              <span>Tempo da tarefa:</span>
              <span>{item.time} Horas</span>
            </TaskTime>
            <TaskContainer>
              <TaskContent>
                <input type="checkbox" onChange={handleCheckboxChange} />
                <label>{item.descriptionTask}</label>
                <button>
                  <Trash size={24} />
                </button>
              </TaskContent>
            </TaskContainer>
          </section>
        )
      })}
    </>
  )
}
