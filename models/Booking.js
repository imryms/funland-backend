const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  customerName:{
    type: String,
    required: true
  },
  customerEmail:{
    type: String,
    required: true
  },
  ticketType: {
    type: String,
    enum: ['Kids', 'Adults'],
    required: true
  },
  quantity:{
    type: Number,
    required: true
  },
  totalPrice:{
    type:Number,
    required: true
  },
  bookingDate: {
    type: Date,
    default: Date.now,
    required: true
  }
},{timestamps:true})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
