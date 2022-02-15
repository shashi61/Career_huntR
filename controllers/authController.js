import User from '../models/User.js'
import {StatusCodes} from 'http-status-codes'

const register = async (req, res) =>{
  //pull out the values from req.body and set it to name, email and password
      const {name, email, password} = req.body
      
      //check empty values
      if(!name || !email || !password) {
        throw new Error('please provide all values')
      }
      
      
      const user = await User.create(name, email, password)
      res.status(StatusCodes.CREATED).json({user})
    
}
const login = async (req, res) =>{
  res.send("login user")
}
const updateUser = async (req, res) =>{
  res.send("update user")
}

export { register, login, updateUser }