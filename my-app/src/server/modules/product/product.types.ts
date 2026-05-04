export interface Variant {
  id: string
  size: string
  price: number
  image: string
}

export interface Product {
  id: string
  title: string
  description: string
  category: string
  variants: Variant[]
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