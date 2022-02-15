import  mongoose  from "mongoose";
import validator from 'validator';

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      messsage: 'Please provide a valid email'
    }
  },
  password: {
    type: String,
    required: [true, 'Please provide   password: {'],
    minlength: 6,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    dafault: 'my city',
  },
})
//will trigger in the authcontroller where a user is being created


export default mongoose.model('User', UserSchema);