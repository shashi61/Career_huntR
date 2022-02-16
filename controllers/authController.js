import User from '../models/User.js'
import {StatusCodes} from 'http-status-codes'
import {BadRequestError, NotFoundError} from '../errors/index.js'


const register = async (req, res) =>{
  // pull out the values from req.body and set it to name, email and password
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
      
      const user = await User.create({name, email, password})
      const token = user.createJWT()
      res.status(StatusCodes.CREATED).json({user:{email:user.email, lastname:user.lastname, location:user.location, name:user.name }, token, location: user.location})

}
const login = async (req, res) =>{
  res.send("login user")
}
const updateUser = async (req, res) =>{
  res.send("update user")
  user.save()

}

export { register, login, updateUser }