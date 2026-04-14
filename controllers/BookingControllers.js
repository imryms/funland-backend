const Booking = require("../models/Booking")

const createBooking = async (req, res) => {
  try {
    const { customerName, customerEmail, ticketType, quantity, bookingDate } =
      req.body

    const ticketPrice = ticketType === "Adults" ? 14 : 7
    const totalPrice = ticketPrice * quantity

    const newBooking = new Booking({
      customerName,
      customerEmail,
      ticketType,
      quantity,
      totalPrice,
      bookingDate,
    })
    await newBooking.save()
    res.status(201).json(newBooking)
  } catch (error) {
    res.status(400).send(`Error creating a Booking, ${error.message}`)
  }
}

const getAllBookings = async (req, res) => {
  try {
    const { email } = req.query
    let filter = {}
    if (!email || email.trim()==="") {
      return res.json([])
    }
    filter = { customerEmail: email }
    const bookings = await Booking.find(filter).sort({ createAt: -1 })
    res.json(bookings)
  } catch (error) {
    res.status(404).send(`Error getting Bookings, ${error.message}`)
  }
}

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params
    const deleteBooking = await Booking.findByIdAndDelete(id)

    if (!deleteBooking) {
      return res.status(404).send("Booking not Exist")
    }

    res.send("Booking deleted successfully")
  } catch (error) {
    return res.status(404).send(`Booking not Exist, ${error.message}`)
  }
}

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)

    if (!booking) {
      return res.status(404).send('Booking not found')
    }

    res.json(booking)
  } catch (error) {
    res.status(500).send(`Error getting booking, ${error.message}`)
  }
}

module.exports = {
  createBooking,
  getAllBookings,
  deleteBooking,
  getBookingById
}
