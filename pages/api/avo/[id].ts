import type { NextApiRequest, NextApiResponse } from 'next'
import DataBase from '@database'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const database = new DataBase()
  const id = req.query.id
  const avo = await database.getById(id as string)
  res.status(200).json(avo)
}

export default allAvos