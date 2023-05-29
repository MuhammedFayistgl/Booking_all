import fs  from 'fs';
import apiData from "../models/apiModal.js";

/** Admin uplode informations post to databace */
export const uplodeDatabace = async (req, res) => {
  const { amount, category, discription, name, place, rating, _id ,profilImg , extraImages} = req.body;
 

  // console.log("req.body",req.body);
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
      Existitm.profilImg = profilImg ? profilImg : Existitm.profilImg;
      Existitm. extraImages =  extraImages ?  extraImages : Existitm. extraImages;
      Existitm = await Existitm.save();
    } else {
      let apis = new apiData({
        amount,
        category,
        discription,
        name,
        place,
        rating,
        profilImg,
        extraImages
       
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

/** testuplodeimage */
export const imageupload = async (req,res) => {  
  // console.log("req.file",req.file);
  // console.log("req.body",req.body);
  const {fileID} = req.body
  const { filename} = req.file

  const idExist = await apiData.findById(fileID)


  if (!idExist) {
    res.status(404).json({status: '404 Not Found'})
  }else{
    try {
      const { profilImg} = idExist
     

      const oldimgname = profilImg.split('/')[3]//.toString()
     

      fs.unlink(`public/${oldimgname}`, (err) => {
        if (err) {console.log('err',err);}
        console.log( `${oldimgname} chenge to ${filename}`);
      });
      idExist.profilImg = `http://localhost:5000/${filename}`
      await idExist.save()
      res.status(200).json({status: 200 ,message:'Profile Image Saved successfully'})
      
    } catch (error) {
      console.log(error);
    }
  
  }
}
/** deleteimage */
export const deleteimage = async (req, res) => {
  const {id,imgName} = req.body
  console.log('delete img ID',req.body);
  
  // if(!id){res.status(404).json({status: 'id Not found'});}
  // else if(!imgName){res.status(404).json({status: 'image name Not found !!'})}
  // fs.unlink('/public',imgName ,(err)=>{ if(err){console.log("fs delete err",err);}} )


}
export const editimage = async (req, res) => {
  console.log('edit img ID',req.body);
}

/** extraimageupload */
export const extraimageupload = async (req, res) => {

    console.log('files arry',req.files);
  const { fileID } = req.body;
  const {  filename } = req.files;


    // console.log('filename arry',req.file);
  if(!req.files){
    res.status(404).json({message:'data not found',statuscode:1});
  }
  let Existitm  = await apiData.findById(fileID);
  if (!Existitm) {
    res.status(404).json({ statuscode: "1", massage: "item not found" });
  }
  
  const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push({name: req.files[i].originalname , size:req.files[i].size  ,  Url: url + "/" + req.files[i].filename})
    }

  Existitm.extraImages = reqFiles 
  Existitm = await Existitm.save();
  res.status(200).json({status:true ,message:'image uplode success fully' })
}




