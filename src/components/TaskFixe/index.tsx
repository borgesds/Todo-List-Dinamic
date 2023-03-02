import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import {
  CountTaskHeader,
  SpanTaskCount,
  SpanTaskTitle,
  TaskContainer,
  TaskContent,
} from './styles'

export function TaskFixe() {
  const { taskDescriptionFixed } = useContext(TaskContext)

  // quantidade de tarefa completada
  const completesFixed = taskDescriptionFixed.filter((task) => {
    return task.isCompleted !== false
  })

  /* const [isChecked, setIsChecked] = useState(false)
  console.log(isChecked)

  function handleCheckboxChange(event: any) {
    setIsChecked(event.target.checked)
  } */

  return (
    <>
      <CountTaskHeader>
        <div>
          <SpanTaskTitle>Tarefas criadas</SpanTaskTitle>
          <SpanTaskCount>{taskDescriptionFixed.length}</SpanTaskCount>
        </div>

        <div>
          <SpanTaskTitle>Concluídas</SpanTaskTitle>
          <SpanTaskCount>
            {completesFixed.length} de {taskDescriptionFixed.length}
          </SpanTaskCount>
        </div>
      </CountTaskHeader>

      {taskDescriptionFixed.map((item) => {
        return (
          <TaskContainer key={item.id}>
            <TaskContent>
              <input type="checkbox" /* onChange={handleCheckboxChange} */ />
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
