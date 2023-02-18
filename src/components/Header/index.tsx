import { CloudCheck } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { ButtonContainer, HeaderContainer, HeaderContent, Logo } from './styles'
import { NewTaskFixe } from '../NewTaskFixeModal'
import { NewTaskDynamic } from '../NewTaskDynamicModal copy'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <div>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <ButtonContainer>Tarefas Fixas</ButtonContainer>
              </Dialog.Trigger>

              <NewTaskFixe />
            </Dialog.Root>
          </div>

          <Logo>
            <div>
              <CloudCheck size={80} color={'white'} />
            </div>

            <span>Cloud Task</span>
          </Logo>

          <div>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <ButtonContainer>Tarefas Dinâmicas</ButtonContainer>
              </Dialog.Trigger>

              <NewTaskDynamic />
            </Dialog.Root>
          </div>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
