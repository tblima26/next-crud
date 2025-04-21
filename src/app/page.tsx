import { products } from "@/components/data/products";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DialogClose } from "@radix-ui/react-dialog";
import { Search, PlusCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Produtos</h1>
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="Id do Pedido" className="w-auto" />
          <Input name="name" placeholder="Nome do Pedido" className="w-auto" />
          <Button type="submit" variant="link">
            <Search className="h-4 w-auto mr-2" />
            Filtrar
          </Button>
        </form>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="h-4 w-auto mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Produto</DialogTitle>
              <DialogDescription>Tela para novo produto</DialogDescription>
            </DialogHeader>
            <form className="space-y-6">
              <div className=" grid grid-cols-6 items-center text-right gap-3">
                <Label htmlFor="name">Produto</Label>
                <Input className="col-span-3" id="name" />
              </div>
              <div className=" grid grid-cols-6 items-center text-right gap-3">
                <Label htmlFor="price">Preço</Label>
                <Input className="col-span-3" id="price" />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline"> Cancelar </Button>
                </DialogClose>
                <Button type="submit" > Salvar </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
