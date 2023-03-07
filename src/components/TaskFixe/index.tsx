import { Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
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

interface updateTaskFixedSchema {
  id: number
  descriptionTask: string
  isCompleted: boolean
}

export function TaskFixe() {
  const { taskDescriptionFixed } = useContext(TaskContext)

  // onChange => captura valor
  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const isChecked = event.target.checked
    console.log(`Tarefa ${id} foi ${isChecked ? 'marcada' : 'desmarcada'}`)
  }

  /* // Update isCompleted
  async function handleCheckboxUpdate(data: UpdateTaskFixedFormInputs) {
    const { id, isCompleted } = data

    await api.patch('/taskFixed/completed', {
      id,
      isCompleted,
    })
  } */

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
            <TaskContent>
              <input
                type="checkbox"
                onChange={(event) => handleCheckboxChange(event, item.id)}
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
