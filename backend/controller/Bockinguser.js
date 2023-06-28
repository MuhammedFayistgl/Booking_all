import BookingUserModel from '../models/BookinguserModel.js';
import apiModals from '../models/apiModal.js'
export const bockingHandler = async (req, res) => {
    const { Date, Time, orderdID, endDate, startDate, options, Email, FullName, Phone } = req.body.Booking_Data
    const itemExist = await apiModals
    try {
        const booking_Data = new BookingUserModel({
            Date, Time, orderdID, endDate,
            startDate, options, Email, FullName, Phone
        })
        booking_Data = await booking_Data.save()
    } catch (error) {
        console.log(error);
    }

    // console.log("booking_Data", orderdID);
};


