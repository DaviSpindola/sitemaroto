// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string,
  content: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  fetch('https://sitemaroto.000webhostapp.com/wp-json/wp/v2/posts').then(res => res.json()).then((data) => {
    res.statusCode = 200
    res.send(data)
  }).catch(err => {
    res.statusCode = 404
    res.send(err)
  })
}
