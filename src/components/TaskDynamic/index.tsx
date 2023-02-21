import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import { TaskContainer, TaskContent, TaskTime } from './styles'

export function TaskDynamic() {
  const { taskDescriptionDynamic } = useContext(TaskContext)

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
                <input type="checkbox" />
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
