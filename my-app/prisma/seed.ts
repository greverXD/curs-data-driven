import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
await prisma.variant.deleteMany()
await prisma.product.deleteMany()
async function main() {
  // 🟢 КРОССОВКИ
  await prisma.product.createMany({
    data: [
      {
        id: crypto.randomUUID(),
        title: "Nike Air Max",
        description: "Легкие кроссовки",
        category: "Кроссовки"
      },
      {
        id: crypto.randomUUID(),
        title: "Adidas Ultraboost",
        description: "Беговые кроссовки",
        category: "Кроссовки"
      }
    ]
  })

  // 🟢 ФУТБОЛКИ
  await prisma.product.createMany({
    data: [
      {
        id: crypto.randomUUID(),
        title: "Basic T-Shirt",
        description: "Хлопковая футболка",
        category: "Футболки"
      },
      {
        id: crypto.randomUUID(),
        title: "Oversize Tee",
        description: "Оверсайз стиль",
        category: "Футболки"
      }
    ]
  })

  // 🟢 ХУДИ
  await prisma.product.createMany({
    data: [
      {
        id: crypto.randomUUID(),
        title: "Black Hoodie",
        description: "Теплый худи",
        category: "Худи"
      },
      {
        id: crypto.randomUUID(),
        title: "Grey Hoodie",
        description: "Повседневный худи",
        category: "Худи"
      }
    ]
  })

  // 🟢 ДЖИНСЫ
  await prisma.product.createMany({
    data: [
      {
        id: crypto.randomUUID(),
        title: "Slim Jeans",
        description: "Облегающие джинсы",
        category: "Джинсы"
      },
      {
        id: crypto.randomUUID(),
        title: "Baggy Jeans",
        description: "Свободный крой",
        category: "Джинсы"
      }
    ]
  })

  // ❗ Теперь добавим variants отдельно (важно для твоей модели)

  const products = await prisma.product.findMany()

  for (const product of products) {
    await prisma.variant.createMany({
      data: [
        {
          size: "S",
          price: 100,
          image: "/images/s.png",
          productId: product.id
        },
        {
          size: "M",
          price: 120,
          image: "/images/m.png",
          productId: product.id
        }
      ]
    })
  }

  console.log("✅ Seed completed")
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())