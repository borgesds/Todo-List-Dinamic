import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { TaskDynamic } from '../../components/TaskDynamic'
import { TaskFixe } from '../../components/TaskFixe'
import { Content, GridContainer, MainContainer } from './styles'

export function Home() {
  return (
    <Content>
      <Header />

      <MainContainer>
        <GridContainer>
          <div>
            <TaskFixe />
          </div>

          <div>
            <TaskDynamic />
          </div>
        </GridContainer>
      </MainContainer>

      <Footer />
    </Content>
  )
}
