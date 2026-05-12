export const getDiscountPrice = (
  price: number,
  discountPercent: number
) => {
  if (!discountPercent) return price

  return Math.round(
    price * (1 - discountPercent / 100)
  )
}