import {
  CloudCheck,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react'
import {
  FooterContainer,
  FooterContent,
  LinkContent,
  Links,
  Logo,
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <Logo>
            <CloudCheck size={25} color={'white'} />

            <span>Cloud Task</span>
          </Logo>

          <Links>
            <span>Menu</span>
            <div>
              <a href="#">Sobre</a>
              <a href="#">Artigo</a>
              <a href="#">Colaboradores</a>
            </div>
          </Links>
        </div>

        <LinkContent>
          <div>
            <a href="#">
              <InstagramLogo size={24} color="white" />
            </a>
            <a href="#">
              <LinkedinLogo size={24} color="white" />
            </a>
            <a href="#">
              <FacebookLogo size={24} color="white" />
            </a>
            <a href="#">
              <TwitterLogo size={24} color="white" />
            </a>
          </div>

          <div>
            <span>https://github.com/borgesds</span>
          </div>
        </LinkContent>
      </FooterContent>
    </FooterContainer>
  )
}
