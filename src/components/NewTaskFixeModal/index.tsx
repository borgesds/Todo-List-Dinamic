import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { CloseButton, Content, Overlay } from './styles'

interface TaskFixe {
  id: number
  descriptionTask: string
  isCompleted: boolean
}

export function NewTaskFixe() {
  /* const [TaskFixes, setTaskFixes] = useState<TaskFixe[]>([])

  const [newTaskText, setNewTaskText] = useState<string>('')

  function handleCreateNewTaskFixe(event: FormEvent) {
    event.preventDefault()

    setTaskFixes([...TaskFixes, ])
  } */

  return (
    <div>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Tarefas Fixas</Dialog.Title>

          <CloseButton>
            <X />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Nova Tarefa" required />

            <button type="submit">Cadastrar Tarefa</button>
          </form>
        </Content>
      </Dialog.Portal>
    </div>
  )
}
