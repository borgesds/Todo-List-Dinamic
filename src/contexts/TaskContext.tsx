import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TaskInterface {
  id: number
  descriptionTask: string
  isCompleted: boolean
  createdAt: string
}

interface TaskInterfaceDynamic {
  id: number
  descriptionTask: string
  isCompleted: boolean
  time: boolean
}

interface CreateTasksInputFixed {
  descriptionTask: string
}

interface TaskContextType {
  taskDescriptionFixed: TaskInterface[]
  taskDescriptionDynamic: TaskInterfaceDynamic[]
  createTaskFixed: (data: CreateTasksInputFixed) => Promise<void>
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

  // Task Fixed
  async function fetchTaskFixed() {
    const response = await api.get('/taskFixe')

    setTaskDescriptionFixed(response.data)
  }

  // Created tasks fixed
  async function createTaskFixed(data: CreateTasksInputFixed) {
    const { descriptionTask } = data

    const response = await api.post('/taskFixe', {
      descriptionTask,
      isCompleted: false,
      createdAt: new Date(),
    })

    setTaskDescriptionFixed((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTaskFixed()
  }, [])

  // --------------------------------
  // Task Dynamic
  async function fetchTaskDynamic() {
    const response = await api.get('/taskDynamic')

    setTaskDescriptionDynamic(response.data)
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
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
