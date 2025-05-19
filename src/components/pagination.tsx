import React from 'react'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from 'lucide-react'

interface PaginationProps {
    pages: number 
    items: number
    page: number
}

export default function Pagination({pages, items, page}: PaginationProps) {
  return (
    <div className="flex justify-between items-center">
        <div>
          <Label>Produtos 10 de {items}</Label>
        </div>
        <div>
          <Label>
            Pagina {page} de {pages}
          </Label>
        </div>
        <div className="flex gap-2.5">
          <Button type="button" variant="outline">
            <ChevronsLeft />
          </Button>
          <Button type="button" variant="outline">
            <ChevronLeft />
          </Button>
          <Button type="button" variant="outline">
            <ChevronsRight />
          </Button>
          <Button type="button" variant="outline">
            <ChevronRight />
          </Button>
        </div>
      </div>
  )
}
