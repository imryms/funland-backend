const router = require('express').Router()
const bookingController = require('../controllers/BookingControllers')

router.post('/', bookingController.createBooking)
router.get('/', bookingController.getAllBookings)
router.delete('/:id', bookingController.deleteBooking)
router.get('/:id', bookingController.getBookingById)

module.exports = router;
