'use client'

import React from 'react'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


interface PaginationProps {
    pages: number 
    items: number
    page: number
}

export default function Pagination({pages, items, page}: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function goToPage(pageNumber: number){
    const params = new URLSearchParams(searchParams.toString())
    params.set('page',String(pageNumber))
    router.push(`?${params.toString()}`)
  }
  function firstPage(){
    goToPage(1)
  }
  function previousPage(){
    console.log('previousPage chamada! Página atual:', page)
    if (page >1)
      goToPage(page-1)
  }
  function nextPage(){
    console.log('previousPage chamada! Página atual:', page)
    if(page<pages)
      goToPage(page+1)
  }
  function lastPage(){
    goToPage(pages)
  }


  return (
    <div className="flex justify-between items-center">
        <div>
          <Label>Total de produtos: {items}</Label>
        </div>
        <div>
          <Label>
            Pagina {page} de {pages}
          </Label>
        </div>
        <div className="flex gap-2.5">
          <Button type="button" variant="outline" onClick={firstPage} disabled={page-1<=0}>
            <ChevronsLeft />
          </Button>
          <Button type="button" variant="outline" onClick={previousPage} disabled={page-1<=0}>
            <ChevronLeft />
          </Button>
          <Button type="button" variant="outline" onClick={nextPage} disabled={page+1>pages}>
            <ChevronRight />
          </Button>
          <Button type="button" variant="outline" onClick={lastPage} disabled={page+1>pages}>
            <ChevronsRight />
          </Button>
        </div>
      </div>
  )
}
