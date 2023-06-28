import mongoose from "mongoose"


const userBooking = mongoose.Schema({
    Date: {
        type: "Date",
        default: Date.now()
    },
    Time: {
        type: "String",
        timestamps: true,
    },
    orderdID: {
        type: 'String',
        required: [true, 'orderdID required ! orderdID missing !!'],
    },
    endDate: {
        type: 'Date',
        required: [true, 'endDate required ! please select endDate']
    },
    startDate: {
        type: 'Date',
        required: [true, 'startDate required !'],
    },
    options: {
        type: 'Object',
    },
    Email: {
        type: 'String',
        required: [true, 'email required']
    },
    FullName: {
        type: 'String',
        required: [true, 'full name required']
    },
    Phone: {
        type: 'String',
        required: [true, 'phone Number required']
    }
})

const BookingUserModel = mongoose.model('BookingUser', userBooking)
export default BookingUserModel