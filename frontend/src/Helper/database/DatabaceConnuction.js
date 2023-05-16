/** import  */
import axios from "axios";
import { HotelApiDataSeter } from "../../Reducs/mainDataClice";

/** feacth all hotels Data  */

export const dataCollection = async (dispach) => {
  axios
    .get("http://localhost:5000/admin/getallDeteals")
    .then((response) => dispach(HotelApiDataSeter(response.data)))
    .catch((err) => {
      console.log(err);
    });
};
