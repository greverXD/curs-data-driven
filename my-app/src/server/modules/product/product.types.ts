export interface Product {
  id: string
  title: string
  price: number
  description: string
  image: string
  category: string
  stock: number
  discount?: number
  createdAt: Date
}

export interface CreateProductDto {
  title: string
  price: number
  description: string
  image: string
  category: string
  stock: number
}

export interface UpdateProductDto {
  title?: string
  price?: number
  description?: string
  image?: string
  category?: string
  stock?: number
  discount?: number
}