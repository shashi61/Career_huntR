import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError,UnAuthenticatedError } from '../errors/index.js'


const register = async (req, res) =>{
  //pull out the values from req.body and set it to name, email and password
      const {name, email, password} = req.body
      
      //check empty values
      if(!name || !email || !password) {
        //invoke the instance CustomeAPIError
        throw new BadRequestError('please provide all values')
      }
      const userAlreadyExists = await User.findOne({email});
      if(userAlreadyExists){
        throw new BadRequestError ('Email already is use')
      }
      
      const user = await User.create({ name, email, password })

      //invoking the token
     const token = user.createJWT()
      res.status(StatusCodes.CREATED).json({ user:{ email:user.email, lastname:user.lastname, location:user.location, name:user.name }, token, location: user.location })
    
}

const login = async (req, res) => {

  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  console.log(user);

  const isPasswordCorrect = await user.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials')
  }
  const token = user.createJWT()
  user.password = undefined
  res.status(StatusCodes.OK).json({ user, token, location: user.location })
  res.send('login user');
}

const updateUser = async (req, res) =>{
  res.send("update user")
  user.save()
}

export { register, login, updateUser }