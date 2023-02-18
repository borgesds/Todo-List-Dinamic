import { CloudCheck } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { ButtonContainer, HeaderContainer, HeaderContent, Logo } from './styles'
import { NewTaskFixe } from '../NewTaskFixeModal'
/* import { NewTaskDynamic } from '../NewTaskDinamicModal copy' */

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonContainer>Tarefas Fixas</ButtonContainer>
            </Dialog.Trigger>

            <NewTaskFixe />
          </Dialog.Root>

          <Logo>
            <div>
              <CloudCheck size={80} color={'white'} />
            </div>

            <span>Cloud Task</span>
          </Logo>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonContainer>Tarefas Dinâmicas</ButtonContainer>
            </Dialog.Trigger>

            {/* <NewTaskDynamic /> */}
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
