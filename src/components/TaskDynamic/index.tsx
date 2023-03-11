import { Trash } from 'phosphor-react'
import { useContext } from 'react'
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

    await api.put(`/completed/Dynamic`, {
      id,
      isCompleted,
    })
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
                <input type="checkbox" /* onChange={handleCheckboxChange}  *//>
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
