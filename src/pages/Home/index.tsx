import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { TaskDynamic } from '../../components/TaskDynamic'
import { TaskFixe } from '../../components/TaskFixe'
import {
  Content,
  CountTaskHeader,
  GridContainer,
  MainContainer,
  SpanTaskCount,
  SpanTaskTitle,
} from './styles'

export function Home() {
  return (
    <Content>
      <Header />

      <MainContainer>
        <GridContainer>
          <div>
            <CountTaskHeader>
              <div>
                <SpanTaskTitle>Tarefas criadas</SpanTaskTitle>
                <SpanTaskCount>8</SpanTaskCount>
              </div>

              <div>
                <SpanTaskTitle>Concluídas</SpanTaskTitle>
                <SpanTaskCount>2 de 8</SpanTaskCount>
              </div>
            </CountTaskHeader>

            <TaskFixe />
          </div>

          <div>
            <CountTaskHeader>
              <div>
                <SpanTaskTitle>Tarefas criadas</SpanTaskTitle>
                <SpanTaskCount>8</SpanTaskCount>
              </div>

              <div>
                <SpanTaskTitle>Concluídas</SpanTaskTitle>
                <SpanTaskCount>2 de 8</SpanTaskCount>
              </div>
            </CountTaskHeader>

            <TaskDynamic />
          </div>
        </GridContainer>
      </MainContainer>

      <Footer />
    </Content>
  )
}
