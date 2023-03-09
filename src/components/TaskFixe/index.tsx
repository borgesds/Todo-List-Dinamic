import { Trash } from 'phosphor-react'
import { ChangeEvent, useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import { api } from '../../lib/axios'
import {
  CountTaskHeader,
  SpanTaskCount,
  SpanTaskTitle,
  TaskContainer,
  TaskContent,
} from './styles'

interface updateTaskFixed {
  id: number
  isCompleted: boolean
}

export function TaskFixe() {
  const { taskDescriptionFixed, fetchTaskFixed } = useContext(TaskContext)

  // Update isCompleted
  async function handleCheckboxUpdate(data: updateTaskFixed) {
    const { id, isCompleted } = data

    await api.patch('/completed', {
      id,
      isCompleted,
    })
  }

  // onChange => captura valor
  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const isCompleted = event.target.checked
    const data: updateTaskFixed = { id, isCompleted }

    if (isCompleted) {
      handleCheckboxUpdate(data)
    } else {
      handleCheckboxUpdate(data)
    }
  }

  // Delete task
  async function handleDelete(id: number) {
    await api.delete(`/deleted/${id}`)

    fetchTaskFixed()
  }

  // quantidade de tarefa completada
  const completesFixed = taskDescriptionFixed.filter((task) => {
    return task.isCompleted === true
  })
  console.log(completesFixed)

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
              <input
                type="checkbox"
                onChange={(event) => handleCheckboxChange(event, item.id)}
              />
              <label>{item.descriptionTask}</label>
              <button onClick={() => handleDelete(item.id)}>
                <Trash size={24} />
              </button>
            </TaskContent>
          </TaskContainer>
        )
      })}
    </>
  )
}
