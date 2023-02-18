import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'

export function NewTaskDynamic() {
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

            <label>Tempo da tarefa</label>
            <input type="number" required />

            <button type="submit">Cadastrar Tarefa</button>
          </form>
        </Content>
      </Dialog.Portal>
    </div>
  )
}
