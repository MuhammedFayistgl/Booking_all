import apiData from "../models/apiModal.js";

/** Admin uplode informations post to databace */
export const uplodeDatabace = async (req, res) => {
  const { amount, category, discription, name, place, rating } = req.body;
  console.log(req.body);
  try {
    if (!req.body) {
      res.status(404).json({ statuscode: "1", massage: "data not found" });
    }
    let apis = new apiData({
      amount,
      category,
      discription,
      name,
      place,
      rating,
    });
    apis = await apis.save();
  } catch (error) {
    console.log(error);
  }
};
/** data feching  Funtion */
export const getdatas = async (req, res) => {
  try {
    const data = await apiData.find({})
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
