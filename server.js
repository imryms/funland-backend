require('dotenv').config({ quiet: true })
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bookingRoutes = require('./routes/BookingRouter')

const PORT = process.env.PORT || 3000

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const db = require('./db')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use('/bookings', bookingRoutes)

app.get('/', (req, res) => {
  res.send('Funland is running 🎡')
})

app.listen(PORT, () => {
  console.log(`Funland Running on port ${PORT}🎢`)
})
