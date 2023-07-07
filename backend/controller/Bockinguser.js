import BookingUserModel from '../models/BookinguserModel.js';
import apiModals from '../models/apiModal.js'
import signupModal from '../models/signupModel.js'

export const bockingHandler = async (req, res) => {

    const { Date, Time, orderdID, endDate, startDate,
        options, Email, FullName, Phone } = req.body.Booking_Data

    const itemExist = await apiModals.findById(orderdID)
    const userExist = await signupModal.findOne({ Email })
    const itmBookExist = await BookingUserModel.findOne({ orderdID })

    if (!itemExist) {
        return res.status(200).json({
            errorcode: 1,
            status: true,
            orderstatus: false,
            message: 'your selected item Not found !'
        })
    }
    else if (itmBookExist) {
        return res.status(200).json({
            errorcode: 1,
            status: true,
            orderstatus: false,
            message: 'Your Booking  already  Reserved Please Choose a new Item'
        })
    }
    // else if (!userExist) {
    //     return res.status(200).json({
    //         errorcode: 1,
    //         status: true,
    //         orderstatus: false,
    //         message: 'Orderd user not registerd pleass register'
    //     })
    // } 
    else if (!req.userID) {
        return res.status(401).json({
            errorcode: 1,
            status: true,
            orderstatus: false,
            message: 'Please Register or Login'
        })
    } else {
        try {
            const booking_Data = await new BookingUserModel({
                Date, Time, orderdID, userID:req.userID, endDate,
                startDate, options, Email, FullName, Phone
            }).save()

            return res.status(200).json({
                errorcode: 0,
                status: false,
                orderstatus: true,
                message: 'Booking saved successfully'
            })

        } catch (error) {
            console.log(error);
        }

    }




};
export const getmyBooking = async (req, res) => {

    if (!req.userID) {
        return res.status(401).json({
            errorcode: 1,
            status: true,
            message: 'Please Register or Login'
        })

    } else {
        try {
            const Booked = await BookingUserModel.findOne({ userID: req.userID })
            if (!Booked) {
                return res.status(204).json({
                    errorcode: 1,
                    status: true,
                    message: 'Booked item not found in the database'
                })
            } else {
                return res.status(200).json({
                    errorcode: 0,
                    status: false,
                    message: 'Booked item found successfully',
                    data: Booked
                })
            }

        } catch (error) {
            console.error(error);
        }
    }
    console.log('req.userID', req.userID);
}

