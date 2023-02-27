import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

const newTaskDynamicSchema = z.object({
  descriptionTask: z.string(),
  timeAt: z.string(),
})

type NewTaskFixedDynamicInputs = z.infer<typeof newTaskDynamicSchema>

export function NewTaskDynamic() {
  const { createTaskDynamic } = useContext(TaskContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTaskFixedDynamicInputs>({
    resolver: zodResolver(newTaskDynamicSchema),
  })

  async function handleCreateNewTaskDynamic(data: NewTaskFixedDynamicInputs) {
    const { descriptionTask, timeAt } = data

    await createTaskDynamic({
      descriptionTask,
      timeAt,
    })

    reset()
  }

  return (
    <div>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Tarefas Fixas</Dialog.Title>

          <CloseButton>
            <X />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewTaskDynamic)}>
            <input
              type="text"
              placeholder="Nova Tarefa"
              required
              {...register('descriptionTask')}
            />

            <label>Tempo para realizar tarefa</label>
            <input
              type="datetime-local"
              placeholder="Nova Tarefa"
              required
              {...register('timeAt')}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar Tarefa
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </div>
  )
}
