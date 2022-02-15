

//use Error class
class CustomeAPIError extends Error {
  constructor(message){
    super(message)
    //add status code by adding property StatusCodes on the instance 
    // this.statusCode = StatusCodes.BAD_REQUEST //set to 400 error
  }
}

export default CustomeAPIError