import { CloudCheck } from 'phosphor-react'
import { ButtonContainer, HeaderContainer, HeaderContent, Logo } from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <ButtonContainer>Tarefas Fixas</ButtonContainer>

          <Logo>
            <div>
              <CloudCheck size={80} color={'white'} />
            </div>

            <span>Cloud Task</span>
          </Logo>

          <ButtonContainer>Tarefas Dinâmicas</ButtonContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
