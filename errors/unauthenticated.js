import { StatusCodes } from 'http-status-codes' 
import CustomeAPIError from './custom-api.js'

// create UnAuthenticatedError class if user does not exist or password does not match

class UnAuthenticatedError extends CustomeAPIError {
  constructor(message){
    super(message) 
    this.statusCode = StatusCodes.UNAUTHORIZED //pass status code 401
    
  }
}

export default UnAuthenticatedError