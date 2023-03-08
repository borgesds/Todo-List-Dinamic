import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TaskInterface {
  id: number
  descriptionTask: string
  isCompleted: boolean
  createdAt: string
}

interface TaskInterfaceDynamic {
  timeAt: ReactNode
  id: number
  descriptionTask: string
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
  const agora = new Date()

  const dia = agora.getDate().toString().padStart(2, '0')
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0')
  const ano = agora.getFullYear().toString().padStart(4, '0')
  const hora = agora.getHours().toString().padStart(2, '0')
  const minutos = agora.getMinutes().toString().padStart(2, '0')
  const segundos = agora.getSeconds().toString().padStart(2, '0')

  // Concatenate time and date
  const dataHoraFormatada =
    dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos + ':' + segundos

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
      createdAt: dataHoraFormatada,
    })

    fetchTaskFixed()
  }

  useEffect(() => {
    fetchTaskFixed()
  }, [])

  // ----------------------------------------------------------------
  /* 
  // Task Dynamic
  async function fetchTaskDynamic() 
    const response = await api.get('/taskDynamic')

    setTaskDescriptionDynamic(response.data)
  }

  // Created tasks Dynamic
  async function createTaskDynamic(data: CreateTasksInputDynamic) {
    const { descriptionTask, timeAt } = data

    const response = await api.post('/taskDynamic', {
      descriptionTask,
      timeAt,
      isCompleted: false,
      createdAt: dataHoraFormatada,
    })

    setTaskDescriptionDynamic((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTaskDynamic()
  }, []) */

  return (
    <TaskContext.Provider
      value={{
        taskDescriptionFixed,
        taskDescriptionDynamic,
        createTaskFixed,
        fetchTaskFixed,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

/* createTaskDynamic, */
