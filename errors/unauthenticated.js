import { StatusCodes } from 'http-status-codes' 
import CustomeAPIError from './custom-api.js'

<<<<<<< HEAD
// create UnAuthenticatedError class if user does not exist or password does not match

class UnAuthenticatedError extends CustomeAPIError {
  constructor(message){
    super(message) 
    this.statusCode = StatusCodes.UNAUTHORIZED //pass status code 401
=======
class UnAuthenticatedError extends CustomeAPIError{
  constructor(message){
    super(message) 
    this.statusCode = StatusCodes.UNAUTHORIZED 
>>>>>>> 310367d10b35dff728a5811f8ce70eca7ac96e38
    
  }
}

export default UnAuthenticatedError