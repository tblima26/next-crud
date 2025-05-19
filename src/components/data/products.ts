// src/components/data/products.ts

export async function getProducts(page:number) {
  const response = await fetch(`http://localhost:3000/produtos?page=${page}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }
  const data = await response.json()
  console.log("Produtos recebidos:", data)
  return data
}


export const createProduct = async (productData: { nome: string; preco: number }) => {
  const response = await fetch('http://localhost:3000/produtos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ produto: productData }),
  })

  if (!response.ok) {
    throw new Error('Erro ao criar produto')
  }
  return response.json()
}

