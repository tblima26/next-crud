import React from 'react'
import { useForm } from 'react-hook-form'
import { Search } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const productsFiltersSchema = z.object({
    id: z.string(),
    name: z.string(),
})

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema>

export default function ProductsFilters() {
    const { register, handleSubmit } = useForm<ProductsFiltersSchema>({
        resolver: zodResolver(productsFiltersSchema)
    })

    function handleFilterPoroducts(data: ProductsFiltersSchema) {
        console.log(data)

    }

    return (
        <form onSubmit={handleSubmit(handleFilterPoroducts)} className="flex items-center gap-2">
            <Input {...register('id')} placeholder="Id do Pedido" className="w-auto" />
            <Input {...register('name')} placeholder="Nome do Pedido" className="w-auto" />
            <Button type="submit" variant="link">
                <Search className="h-4 w-auto mr-2" />
                Filtrar
            </Button>
        </form>
    )
}
