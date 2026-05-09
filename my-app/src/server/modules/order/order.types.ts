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
  customerName: string
  phone: string
  address: string
  comment?: string
  paymentMethod: string

  items: {
    variantId: string
    quantity: number
  }[]
}