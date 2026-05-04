import express from 'express'
import type { Request, Response } from 'express'

export const app = express()

const port = 3070

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}...`)
})

app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    api: 'up',
  })
})
