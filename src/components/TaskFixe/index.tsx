import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { z } from 'zod'
import { TaskContext } from '../../contexts/TaskContext'
import { api } from '../../lib/axios'
import {
  CountTaskHeader,
  SpanTaskCount,
  SpanTaskTitle,
  TaskContainer,
  TaskContent,
} from './styles'

const updateTaskFixedSchema = z.object({
  id: z.string(),
  isCompleted: z.boolean(),
})

type UpdateTaskFixedFormInputs = z.infer<typeof updateTaskFixedSchema>

export function TaskFixe() {
  const { taskDescriptionFixed } = useContext(TaskContext)

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked)
  }

  // Update isCompleted
  async function handleCheckboxUpdate(data: UpdateTaskFixedFormInputs) {
    const { id, isCompleted } = data

    await api.patch('/taskFixed/completed', {
      id,
      isCompleted,
    })
  }

  // quantidade de tarefa completada
  const completesFixed = taskDescriptionFixed.filter((task) => {
    return task.isCompleted !== false
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
            <TaskContent onSubmit={handleCheckboxUpdate}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
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
