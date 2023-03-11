import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TaskInterface {
  id: number
  descriptionTask: string
  isCompleted: boolean
  createdAt: string
}

interface TaskInterfaceDynamic {
  timeLeft: ReactNode
  id: number
  descriptionTask: string
  timeAt: string
  isCompleted: boolean
  createdAt: string
}

interface CreateTasksInputFixed {
  descriptionTask: string
}

interface CreateTasksInputDynamic {
  descriptionTask: string
  timeAt: string
}

interface TaskContextType {
  taskDescriptionFixed: TaskInterface[]
  taskDescriptionDynamic: TaskInterfaceDynamic[]
  fetchTaskFixed: () => Promise<void>
  fetchTaskDynamic: () => Promise<void>
  createTaskFixed: (data: CreateTasksInputFixed) => Promise<void>
  createTaskDynamic: (data: CreateTasksInputDynamic) => Promise<void>
}

interface TasksProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [taskDescriptionFixed, setTaskDescriptionFixed] = useState<
    TaskInterface[]
  >([])
  const [taskDescriptionDynamic, setTaskDescriptionDynamic] = useState<
    TaskInterfaceDynamic[]
  >([])

  // Date creation
  const now = new Date()

  const day = now.getDate().toString().padStart(2, '0')
  const month = (now.getMonth() + 1).toString().padStart(2, '0')
  const age = now.getFullYear().toString().padStart(4, '0')
  const hour = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const secund = now.getSeconds().toString().padStart(2, '0')

  // Concatenate time and date
  const formattedDateTime =
    day + '/' + month + '/' + age + ' ' + hour + ':' + minutes + ':' + secund

  // Task Fixed
  async function fetchTaskFixed() {
    const response = await api.get('/taskFixed')

    setTaskDescriptionFixed(response.data)
  }

  // Created tasks fixed
  async function createTaskFixed(data: CreateTasksInputFixed) {
    const { descriptionTask } = data

    await api.post('/taskFixed', {
      descriptionTask,
      isCompleted: false,
      createdAt: formattedDateTime,
    })

    fetchTaskFixed()
  }

  useEffect(() => {
    fetchTaskFixed()
  }, [])

  // ------------------------------------------------------------------------

  // Task Dynamic
  async function fetchTaskDynamic() {
    const response = await api.get('/taskDynamic')

    setTaskDescriptionDynamic(response.data)
  }

  // Created tasks Dynamic
  async function createTaskDynamic(data: CreateTasksInputDynamic) {
    const { descriptionTask, timeAt } = data

    await api.post('/taskDynamic', {
      descriptionTask,
      timeAt,
      isCompleted: false,
      createdAt: formattedDateTime,
    })

    fetchTaskDynamic()
  }

  useEffect(() => {
    fetchTaskDynamic()
  }, [])

  return (
    <TaskContext.Provider
      value={{
        taskDescriptionFixed,
        taskDescriptionDynamic,
        createTaskFixed,
        createTaskDynamic,
        fetchTaskFixed,
        fetchTaskDynamic,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
