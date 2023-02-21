import { useContext } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { TaskDynamic } from '../../components/TaskDynamic'
import { TaskFixe } from '../../components/TaskFixe'
import { TaskContext } from '../../contexts/TaskContext'
import {
  Content,
  CountTaskHeader,
  GridContainer,
  MainContainer,
  SpanTaskCount,
  SpanTaskTitle,
} from './styles'

export function Home() {
  const { taskDescriptionDynamic, taskDescriptionFixed } =
    useContext(TaskContext)

  // quantidade de tarefa completada
  const completesFixed = taskDescriptionFixed.filter((task) => {
    return task.isCompleted !== false
  })

  const completesDynamic = taskDescriptionDynamic.filter((task) => {
    return task.isCompleted !== false
  })

  return (
    <Content>
      <Header />

      <MainContainer>
        <GridContainer>
          <div>
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

            <TaskFixe />
          </div>

          <div>
            <CountTaskHeader>
              <div>
                <SpanTaskTitle>Tarefas criadas</SpanTaskTitle>
                <SpanTaskCount>{taskDescriptionDynamic.length}</SpanTaskCount>
              </div>

              <div>
                <SpanTaskTitle>Concluídas</SpanTaskTitle>
                <SpanTaskCount>
                  {completesDynamic.length} de {taskDescriptionDynamic.length}
                </SpanTaskCount>
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
