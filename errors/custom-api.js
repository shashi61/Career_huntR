//use Error class
class CustomeAPIError extends Error {
  constructor(message){
    super(message)
    
  }
}

export default CustomeAPIError