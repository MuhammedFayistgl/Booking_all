import apiData from "../models/apiModal.js";

/** Admin uplode informations post to databace */
export const uplodeDatabace = async (req, res) => {
  const { amount, category, discription, name, place, rating, _id } = req.body;

  try {
    if (!req.body) {
      res.status(404).json({ statuscode: "1", massage: "data not found" });
    }
    /** this api Update */
    if (_id) {
      let Existitm = await apiData.findById(_id);
      if (!Existitm) {
        res.status(404).json({ statuscode: "1", massage: "item not found" });
      }

      Existitm.amount = amount ? amount : Existitm.amount;
      Existitm.category = category ? category : Existitm.category;
      Existitm.discription = discription ? discription : Existitm.discription;
      Existitm.name = name ? name : Existitm.name;
      Existitm.place = place ? place : Existitm.place;
      Existitm.rating = rating ? rating : Existitm.rating;
      Existitm = await Existitm.save();
    } else {
      let apis = new apiData({
        amount,
        category,
        discription,
        name,
        place,
        rating,
      });
      apis = await apis.save();
    }
  } catch (error) {
    console.log(error);
  }
};
/** data feching  Funtion */
export const getdatas = async (req, res) => {
  try {
    const data = await apiData.find({});
console.log('data',data);
    res.status(200).json({
      errorcode: 0,
      status: true,
      msg: "All data found",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
/** Delete One */
export const deletOnedata = async (req, res) => {
  const { _id } = req.body;
  try {
    delID = await apiData.findByIdAndDelete(_id);
    if (!delID) {
      return res.status(200).json({
        errorcode: 2,
        status: false,
        msg: "item not found !",
        data: null,
      });
    }
    return res.status(200).json({
      errorcode: 2,
      status: false,
      msg: "user delete sucssusfully",
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};
