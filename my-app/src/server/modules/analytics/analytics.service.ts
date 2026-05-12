import prisma from '../../config/db'

export const getDashboard = async () => {
  const now = new Date()

  const last7Days = new Date()
  last7Days.setDate(now.getDate() - 7)

  // 👀 посещения
  const visitsRaw = await prisma.analyticsEvent.groupBy({
    by: ['createdAt'],
    where: {
      type: 'PAGE_VIEW',
      createdAt: {
        gte: last7Days
      }
    },
    _count: true,
    orderBy: {
      createdAt: 'asc'
    }
  })

  const visits = visitsRaw.map(item => ({
    date: item.createdAt.toISOString().split('T')[0],
    count: item._count
  }))

  // 📦 заказы
  const ordersRaw = await prisma.order.groupBy({
    by: ['createdAt'],
    where: {
      createdAt: {
        gte: last7Days
      }
    },
    _count: true,
    _sum: {
      total: true
    },
    orderBy: {
      createdAt: 'asc'
    }
  })

  const orders = ordersRaw.map(item => ({
    date: item.createdAt.toISOString().split('T')[0],
    count: item._count,
    revenue: item._sum.total || 0
  }))

  // 👥 пользователи
  const usersRaw = await prisma.user.groupBy({
    by: ['createdAt'],
    where: {
      createdAt: {
        gte: last7Days
      }
    },
    _count: true,
    orderBy: {
      createdAt: 'asc'
    }
  })

  const users = usersRaw.map(item => ({
    date: item.createdAt.toISOString().split('T')[0],
    count: item._count
  }))

  // 📊 основные метрики
  const totalUsers = await prisma.user.count()

  const totalOrders = await prisma.order.count()

  const totalVisits = await prisma.analyticsEvent.count({
    where: {
      type: 'PAGE_VIEW'
    }
  })

  const revenue = await prisma.order.aggregate({
    _sum: {
      total: true
    }
  })

  const averageOrderValue =
    totalOrders > 0
      ? (revenue._sum.total || 0) / totalOrders
      : 0

  // 🔥 топ товары
  const topProductsRaw = await prisma.orderItem.groupBy({
    by: ['productId'],
    _sum: {
      quantity: true
    },
    orderBy: {
      _sum: {
        quantity: 'desc'
      }
    },
    take: 5
  })

  const topProducts = await Promise.all(
    topProductsRaw.map(async item => {
      const product = await prisma.product.findUnique({
        where: {
          id: item.productId
        }
      })

      return {
        title: product?.title || 'Unknown',
        sold: item._sum.quantity || 0
      }
    })
  )

  // 🕓 последние заказы
  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      user: true
    }
  })

  // 🔥 conversion funnel
  const pageViews = await prisma.analyticsEvent.count({
    where: {
      type: 'PAGE_VIEW'
    }
  })

  const productViews = await prisma.analyticsEvent.count({
    where: {
      type: 'PRODUCT_VIEW'
    }
  })

  const addToCart = await prisma.analyticsEvent.count({
    where: {
      type: 'ADD_TO_CART'
    }
  })

  const orderCreated = await prisma.analyticsEvent.count({
    where: {
      type: 'ORDER_CREATED'
    }
  })

  // 🕒 visits by hour
  const visitsByHourRaw = await prisma.analyticsEvent.findMany({
    where: {
      type: 'PAGE_VIEW'
    },
    select: {
      createdAt: true
    }
  })

  const visitsByHour = Array.from(
    { length: 24 },
    (_, hour) => ({
      hour,
      visits: 0
    })
  )

  visitsByHourRaw.forEach(item => {
    const hour = new Date(item.createdAt).getHours()

    visitsByHour[hour].visits++
  })

  // 🛒 top categories
  const topCategoriesRaw = await prisma.orderItem.findMany({
    include: {
      product: true
    }
  })

  const categoryMap: Record<string, number> = {}

  topCategoriesRaw.forEach(item => {
    const category = item.product.category

    categoryMap[category] =
      (categoryMap[category] || 0) + item.quantity
  })

  const topCategories = Object.entries(categoryMap)
    .map(([category, sold]) => ({
      category,
      sold
    }))
    .sort((a, b) => b.sold - a.sold)

  // 📈 conversion metrics
  const conversion = {
    viewsToCart:
      productViews > 0
        ? ((addToCart / productViews) * 100).toFixed(1)
        : 0,

    cartToOrder:
      addToCart > 0
        ? ((orderCreated / addToCart) * 100).toFixed(1)
        : 0
  }

  // 📏 top sizes
  const topSizesRaw = await prisma.orderItem.findMany({
    include: {
      variant: true
    }
  })

  const sizeMap: Record<string, number> = {}

  topSizesRaw.forEach(item => {
    if (!item.variant) return

    const size = item.variant.size

    sizeMap[size] =
      (sizeMap[size] || 0) + item.quantity
  })

  const topSizes = Object.entries(sizeMap)
    .map(([size, sold]) => ({
      size,
      sold
    }))
    .sort((a, b) => b.sold - a.sold)
const latestUsersRaw =
  await prisma.user.findMany({
    take: 5,

    orderBy: {
      createdAt: 'desc'
    }
  })

const latestUsers = await Promise.all(
  latestUsersRaw.map(async user => {
    const latestEvent =
      await prisma.analyticsEvent.findFirst({
        where: {
          userId: user.id
        },

        orderBy: {
          createdAt: 'desc'
        }
      })

    return {
      ...user,

      ipAddress:
        latestEvent?.ipAddress || 'Unknown'
    }
  })
)
const activeUsersRaw =
  await prisma.analyticsEvent.groupBy({
    by: ['userId'],

    where: {
      userId: {
        not: null
      }
    },

    _count: true,

    orderBy: {
      _count: {
        userId: 'desc'
      }
    },

    take: 5
  })
  const activeUsers = await Promise.all(
  activeUsersRaw.map(async item => {
    const user = await prisma.user.findUnique({
      where: {
        id: item.userId!
      },

      include: {
        orders: true
      }
    })

    const totalSpent =
      user?.orders.reduce(
        (sum, order) => sum + order.total,
        0
      ) || 0

    return {
      email: user?.email,

      activity: item._count,

      orders: user?.orders.length || 0,

      totalSpent
    }
  })
)
const analyticsEvents =
  await prisma.analyticsEvent.findMany({
    where: {
      userAgent: {
        not: null
      }
    }
  })
const chromeUsers = new Set(
  analyticsEvents
    .filter(event =>
      event.userAgent?.includes('Chrome')
    )
    .map(event => event.userId || event.ipAddress)
).size
const mobileUsers = new Set(
  analyticsEvents
    .filter(event =>
      /Mobile|Android|iPhone/i.test(
        event.userAgent || ''
      )
    )
    .map(event => event.userId || event.ipAddress)
).size


const geoEvents =
  await prisma.analyticsEvent.findMany({
    where: {
      userAgent: {
        not: null
      }
    }
  })

const browserUsers = {
  Chrome: new Set<string>(),
  Firefox: new Set<string>(),
  Safari: new Set<string>(),
  Edge: new Set<string>()
}

const deviceUsers = {
  Desktop: new Set<string>(),
  Mobile: new Set<string>(),
  Tablet: new Set<string>()
}

const osUsers = {
  Windows: new Set<string>(),
  MacOS: new Set<string>(),
  Android: new Set<string>(),
  iPhone: new Set<string>(),
  Linux: new Set<string>()
}

geoEvents.forEach(event => {
  const ua = event.userAgent || ''

 const uniqueKey = `${
  event.userId || event.ipAddress || 'guest'
}-${event.userAgent || 'unknown'}`

  // Browsers
if (ua.includes('Edg')) {
  browserUsers.Edge.add(uniqueKey)
} else if (ua.includes('Firefox')) {
  browserUsers.Firefox.add(uniqueKey)
} else if (
  ua.includes('Safari') &&
  !ua.includes('Chrome')
) {
  browserUsers.Safari.add(uniqueKey)
} else if (ua.includes('Chrome')) {
  browserUsers.Chrome.add(uniqueKey)
}

  // Devices
  if (/Mobile|Android|iPhone/i.test(ua)) {
    deviceUsers.Mobile.add(uniqueKey)
  } else if (/Tablet|iPad/i.test(ua)) {
    deviceUsers.Tablet.add(uniqueKey)
  } else {
    deviceUsers.Desktop.add(uniqueKey)
  }

  // OS
  if (ua.includes('Android')) {
  osUsers.Android.add(uniqueKey)
} else if (ua.includes('iPhone')) {
  osUsers.iPhone.add(uniqueKey)
} else if (ua.includes('Windows')) {
  osUsers.Windows.add(uniqueKey)
} else if (ua.includes('Mac OS')) {
  osUsers.MacOS.add(uniqueKey)
} else if (ua.includes('Linux')) {
  osUsers.Linux.add(uniqueKey)
}
})

const browsers = {
  Chrome: browserUsers.Chrome.size,
  Firefox: browserUsers.Firefox.size,
  Safari: browserUsers.Safari.size,
  Edge: browserUsers.Edge.size
}

const devices = {
  Desktop: deviceUsers.Desktop.size,
  Mobile: deviceUsers.Mobile.size,
  Tablet: deviceUsers.Tablet.size
}

const os = {
  Windows: osUsers.Windows.size,
  MacOS: osUsers.MacOS.size,
  Android: osUsers.Android.size,
  iPhone: osUsers.iPhone.size,
  Linux: osUsers.Linux.size
}




const recentActivity =
  await prisma.analyticsEvent.findMany({
    take: 20,

    orderBy: {
      createdAt: 'desc'
    },

    include: {
      user: true
    }
  })


  const topPagesRaw =
  await prisma.analyticsEvent.groupBy({
    by: ['page'],

    where: {
      page: {
        not: null
      }
    },

    _count: true,

    orderBy: {
      _count: {
        page: 'desc'
      }
    },

    take: 10
  })

const topPages = topPagesRaw.map(item => ({
  page: item.page,
  visits: item._count
}))


  return {
    visits,
    orders,
    users,

    stats: {
      totalUsers,
      totalOrders,
      totalVisits,
      revenue: revenue._sum.total || 0
    },

    funnel: {
      pageViews,
      productViews,
      addToCart,
      orders: orderCreated
    },

    market: {
      topCategories,
      conversion,
      averageOrderValue,
      topSizes
    },
    customers: {
  latestUsers,
  activeUsers,

  analytics: {
    chromeUsers,
    mobileUsers
  }
},
geography: {
  browsers,
  devices,
  os
},
heatmap: {
  topPages
},
activity: recentActivity,

    visitsByHour,

    topProducts,

    recentOrders
  }
}