import { Trash } from 'phosphor-react'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
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

interface TaskWithTimeLeft {
  id: number
  descriptionTask: string
  isCompleted: boolean
  timeAt: string
  timeLeft?: string
}

export function TaskDynamic() {
  const { taskDescriptionDynamic, fetchTaskDynamic } = useContext(TaskContext)

  // Time Left
  const [tasksWithTimeLeft, setTasksWithTimeLeft] = useState<
    TaskWithTimeLeft[]
  >([])

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

  /* Time Task Countdown */
  // Calculate time left for each task
  useEffect(() => {
    const updateTasksWithTimeLeft = () => {
      const newTasksWithTimeLeft: TaskWithTimeLeft[] =
        taskDescriptionDynamic.map((task) => {
          const diff = new Date(task.timeAt).getTime() - new Date().getTime()

          if (diff <= 0) {
            return {
              ...task,
              timeLeft: 'Concluído',
            }
          } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
              (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            ).toLocaleString(undefined, { minimumIntegerDigits: 2 })
            const minutes = Math.floor(
              (diff % (1000 * 60 * 60)) / (1000 * 60),
            ).toLocaleString(undefined, { minimumIntegerDigits: 2 })
            const seconds = Math.floor(
              (diff % (1000 * 60)) / 1000,
            ).toLocaleString(undefined, { minimumIntegerDigits: 2 })

            let timeLeft = ''
            if (days > 0) {
              timeLeft = `${days} dias`
            } else {
              timeLeft = `${hours}:${minutes}:${seconds}`
            }

            return {
              ...task,
              timeLeft,
            }
          }
        })
      setTasksWithTimeLeft(newTasksWithTimeLeft)
    }

    updateTasksWithTimeLeft()

    const intervalId = setInterval(() => {
      updateTasksWithTimeLeft()
    }, 1000)
    return () => clearInterval(intervalId)
  }, [taskDescriptionDynamic])

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
      {tasksWithTimeLeft.map((item) => {
        return (
          <section key={item.id}>
            <TaskTime>
              <span>Tempo da tarefa:</span>
              <span id="time">{item.timeLeft}</span>
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
