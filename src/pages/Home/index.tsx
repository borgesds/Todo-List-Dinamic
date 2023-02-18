import { Header } from '../../components/Header'
import { Task } from '../../components/Task'
import {
  CountTaskHeader,
  GridContainer,
  MainContainer,
  SpanTaskCount,
  SpanTaskTitle,
} from './styles'

export function Home() {
  return (
    <>
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

            <Task />

            <Task />

            <Task />

            <Task />

            <Task />

            <Task />
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

            <Task />

            <Task />

            <Task />
          </div>
        </GridContainer>
      </MainContainer>
    </>
  )
}
