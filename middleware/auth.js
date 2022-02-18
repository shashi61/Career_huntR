//Juhi's work
import jwt from 'jsonwebtoken'
import { UnAuthenticatedError } from '../errors/index.js'

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Authentication invalid')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    console.log("PAYLOAD",payload)
    // attach the user request object
    // req.user = payload
    req.user = { userId: payload.userId }
    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication invalid')
  }
}
export default auth

//my work
// import jwt from 'jsonwebtoken';
// import { UnAuthenticatedError } from '../errors/index.js'

// const auth = async (req, res, next) => {

//   const authHeader = req.headers.authorization
//   const [_, token] = authHeader.split(' ')
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)
//     req.user = decoded
//     console.log(authHeader)
//     next()
//   } catch (error) {
//     throw new UnAuthenticatedError('authorization failed, please log in')
//   }
// }
// export default auth