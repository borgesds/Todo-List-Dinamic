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
  TaskTime,
} from './styles'

interface updateTaskDynamic {
  id: number
  isCompleted: boolean
}

export function TaskDynamic() {
  const { taskDescriptionDynamic, fetchTaskDynamic } = useContext(TaskContext)

  // Update isCompleted
  async function handleCheckboxUpdate(data: updateTaskDynamic) {
    const { id, isCompleted } = data

    await api.patch(`/completed/Dynamic`, {
      id,
      isCompleted,
    })

    fetchTaskDynamic()
  }

  // OnChange => capture value
  const handleCheckboxChangeDynamic = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const isCompleted = event.target.checked
    const data: updateTaskDynamic = { id, isCompleted }

    if (isCompleted) {
      handleCheckboxUpdate(data)
    } else {
      handleCheckboxUpdate(data)
    }
  }

  // Delete task
  async function handleDeleteDynamic(id: number) {
    await api.delete(`/deleted/Dynamic/${id}`)

    fetchTaskDynamic()
  }

  // quantidade de tarefa completada
  const completesDynamic = taskDescriptionDynamic.filter((task) => {
    return task.isCompleted
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
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={(event) =>
                    handleCheckboxChangeDynamic(event, item.id)
                  }
                />
                <label>{item.descriptionTask}</label>
                <button onClick={() => handleDeleteDynamic(item.id)}>
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
