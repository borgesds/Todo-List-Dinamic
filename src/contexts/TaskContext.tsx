import { createContext, ReactNode } from 'react'

interface TaskInterface {
  id: number
  descriptionTask: string
  isCompleted: boolean
}

interface TaskContextType {
  Tasks: TaskInterface[]
}

interface TasksProviderProps {
  children: ReactNode
}

const TaskContext = createContext({} as TaskContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  return (
    <TaskContext.Provider value={{ Tasks: [] }}>
      {children}
    </TaskContext.Provider>
  )
}
