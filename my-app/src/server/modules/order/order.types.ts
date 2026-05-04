export interface OrderItem {
  productId: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: 'PENDING' | 'PAID' | 'CANCELLED'
  createdAt: Date
}

export interface CreateOrderDto {
items: {
    variantId: string
    quantity: number
  }[]
}