import express from 'express'
import morgan from 'morgan'

const app = express()

//env
import dotenv from 'dotenv'
dotenv.config()

import 'express-async-errors'
import morgan from 'morgan'

// db and authentication
import connectDB from './db/connect.js'


import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

//middleware
import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMiddleware from './middleware/error-handler.js'
// import authenticateUser from './middleware/auth.js'

<<<<<<< HEAD

if(process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev')) //using dev for colored output response
=======
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
>>>>>>> 310367d10b35dff728a5811f8ce70eca7ac96e38
}
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome!' })
  // res.send("welcome");
})

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API !' })
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()