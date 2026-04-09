import { Product } from "./product.types.js"
const product: Product[] = []

export const getAll= (): Product[] => product

export const getById = (id:string): Product | undefined=> product.find(p=> p.id === id)


export const create = (client: Product): Product => {
 product.push(client)
 return client
}

export const update = (id: string, data: Partial<Product>): Product | null => {
 const client = product.find(c => c.id === id)
 if (!client) return null

 Object.assign(client, data)
 return client
}

export const remove = (id: string): boolean => {
 const index = product.findIndex(c => c.id === id)
 if (index === -1) return false

 product.splice(index, 1)
 return true
}

