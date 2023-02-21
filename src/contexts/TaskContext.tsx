import { createContext, ReactNode, useEffect, useState } from 'react'

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
  async function loadTaskFixed() {
    const response = await fetch('http://localhost:3333/taskFixe')
    const data = await response.json()

    setTaskDescriptionFixed(data)
  }

  useEffect(() => {
    loadTaskFixed()
  }, [])

  // Task Dynamic
  async function loadTaskDynamic() {
    const response = await fetch('http://localhost:3333/taskDynamic')
    const data = await response.json()

    setTaskDescriptionDynamic(data)
  }

  useEffect(() => {
    loadTaskDynamic()
  }, [])

  return (
    <TaskContext.Provider
      value={{ taskDescriptionFixed, taskDescriptionDynamic }}
    >
      {children}
    </TaskContext.Provider>
  )
}
