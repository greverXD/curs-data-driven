import prisma from "../../config/db"
export const getMe = async (req:any, res:any) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id }
  })

  res.json(user)
}