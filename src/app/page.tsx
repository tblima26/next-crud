"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  PlusCircle,
} from "lucide-react";
import { getProducts } from "@/components/data/products";
import ProductsFilters from "@/components/products-filters";
import { CreateProductDialog } from "@/components/create-product-dialog";
import { Label } from "@/components/ui/label";
import Pagination from "@/components/pagination";

export default function Home() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Produtos</h1>
      <div className="flex items-center justify-between">
        <ProductsFilters />
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="h-4 w-auto mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <CreateProductDialog />
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Criado em</TableHead>
              <TableHead>Ultima atualização</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.data?.map((product: any) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.nome}</TableCell>
                <TableCell>{"R$ " + product.preco}</TableCell>
                <TableCell>{product.created_at}</TableCell>
                <TableCell>{product.updated_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {products? (
        <Pagination
          items={products.pagination.items}
          page={products.pagination.page}
          pages={products.pagination.pages}
        />
      ) : (
        <p>Carregando paginação...</p>
      )}
    </div>
  );
}
