import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Clerk 身份测试
 * @param req
 * @param res
 * @returns
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Return a simple response since authentication is not used.
  res.status(200).json({ user: null })
}
