import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TaskInterface {
  id: number
  descriptionTask: string
  isCompleted: boolean
}

interface TaskInterfaceDynamic {
  id: number
  descriptionTask: string
  isCompleted: boolean
  time: boolean
}

interface TaskContextType {
  taskDescriptionFixed: TaskInterface[]
  taskDescriptionDynamic: TaskInterfaceDynamic[]
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

  useEffect(() => {
    fetchTaskFixed()
  }, [])

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
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
