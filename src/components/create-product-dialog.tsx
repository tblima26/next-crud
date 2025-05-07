import {
    DialogHeader,
    DialogFooter,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
  } from './ui/dialog'
  import { Label } from './ui/label'
  import { Button } from './ui/button'
  import { Input } from './ui/input'
  import { zodResolver } from '@hookform/resolvers/zod'
  import { useForm } from 'react-hook-form'
  import { z } from 'zod'
  import { useMutation, useQueryClient } from '@tanstack/react-query'
  import { createProduct } from './data/products'
  
  const createProductSchema = z.object({
    name: z.string(),
    price: z.coerce.number(),
  })
  
  type CreateProductSchema = z.infer<typeof createProductSchema>
  
  export function CreateProductDialog() {
    const { register, handleSubmit } = useForm<CreateProductSchema>({
      resolver: zodResolver(createProductSchema),
    })
  
    const queryClient = useQueryClient()
  
    const { mutateAsync: createProductFn } = useMutation({
      mutationFn: createProduct,
      onSuccess(_, variables) {
        queryClient.setQueryData(['products'], (data: any = []) => [
          ...data,
          {
            nome: variables.nome,
            preco: variables.preco,
          },
        ])
      },
    })
  
    async function handleCreateProduct(data: CreateProductSchema) {
      try {
        await createProductFn({
          nome: data.name,
          preco: data.price,
        })
        alert('Produto cadastrado com sucesso!')
      } catch (err) {
        alert('Erro ao cadastrar produto...')
      }
    }
  
    return (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Produto</DialogTitle>
          <DialogDescription>Tela para novo produto</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleCreateProduct)} className="space-y-6">
          <div className="grid grid-cols-6 items-center text-right gap-3">
            <Label htmlFor="name">Produto</Label>
            <Input className="col-span-3" {...register('name')} />
          </div>
          <div className="grid grid-cols-6 items-center text-right gap-3">
            <Label htmlFor="price">Preço</Label>
            <Input className="col-span-3" {...register('price')} />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    )
  }
  