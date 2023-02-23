import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
/* import { FormEvent, useState } from 'react' */
import { CloseButton, Content, Overlay } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

/* interface TaskFixe {
  id: number
  descriptionTask: string
  isCompleted: boolean
} */

const newTaskFixedSchema = z.object({
  descriptionTask: z.string(),
  /* isCompleted: z.enum(['false', 'true']), */
})

type NewTaskFixedFormInputs = z.infer<typeof newTaskFixedSchema>

export function NewTaskFixe() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTaskFixedFormInputs>({
    resolver: zodResolver(newTaskFixedSchema),
  })

  function handleCreateNewTaskFixed(data: NewTaskFixedFormInputs) {
    console.log(data)
  }

  /* const [TaskFixes, setTaskFixes] = useState<TaskFixe[]>([])

  const [newTaskText, setNewTaskText] = useState<string>('')

  function handleCreateNewTaskFixe(event: FormEvent) {
    event.preventDefault()

    setTaskFixes([...TaskFixes, ])
  } */

  return (
    <div>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Tarefas Fixas</Dialog.Title>

          <CloseButton>
            <X />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewTaskFixed)}>
            <input
              type="checkbox"
              placeholder="Nova Tarefa"
              required
              {...register('descriptionTask')}
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
