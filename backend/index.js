const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');

const userRoutes = require('./routes/userRoutes')
const homeRoutes = require('./routes/homeRoutes')

require('dotenv').config()


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected')
    })
  })
  .catch((error) => {
    console.log(error)
  })


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use((req, res, next) => {
    next()
  })
app.use(cors());

// Routes
app.use('/api/home', homeRoutes)
app.use('/api/user', userRoutes)
// app.use('/api/punch', timePunchRoutes)



// build (will need to adjust this)
// app.use(express.static(path.join(__dirname, '../frontend/dist')))
// app.get("*", (req, res) =>
//   res.sendFile(
//     path.resolve(__dirname, "../", 'frontend', 'dist', 'index.html')
//   )
// )