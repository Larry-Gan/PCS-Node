import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  const num = Math.floor(Math.random() * 100);
  res.status(200).send(num);
};

export default handler;
