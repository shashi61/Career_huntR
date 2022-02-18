import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js'

const auth = async (req, res, next) => {

  const authHeader = req.headers.authorization
  const [_, token] = authHeader.split(' ')
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    console.log(authHeader)
    next()
  } catch (error) {
    throw new UnAuthenticatedError('authorization failed, please log in')
  }
}
export default auth