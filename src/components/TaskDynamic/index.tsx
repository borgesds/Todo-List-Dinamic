import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import {
  CountTaskHeader,
  SpanTaskCount,
  SpanTaskTitle,
  TaskContainer,
  TaskContent,
  TaskTime,
} from './styles'

export function TaskDynamic() {
  const { taskDescriptionDynamic } = useContext(TaskContext)

  const [isChecked, setIsChecked] = useState(false)
  console.log(isChecked)

  function handleCheckboxChange(event: any) {
    setIsChecked(event.target.checked)
  }

  // quantidade de tarefa completada
  const completesDynamic = taskDescriptionDynamic.filter((task) => {
    return task.isCompleted !== false
  })

  return (
    <>
      <CountTaskHeader>
        <div>
          <SpanTaskTitle>Tarefas criadas</SpanTaskTitle>
          <SpanTaskCount>{taskDescriptionDynamic.length}</SpanTaskCount>
        </div>

        <div>
          <SpanTaskTitle>Concluídas</SpanTaskTitle>
          <SpanTaskCount>
            {completesDynamic.length} de {taskDescriptionDynamic.length}
          </SpanTaskCount>
        </div>
      </CountTaskHeader>
      {taskDescriptionDynamic.map((item) => {
        return (
          <section key={item.id}>
            <TaskTime>
              <span>Tempo da tarefa:</span>
              <span>{item.timeAt} Horas</span>
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
