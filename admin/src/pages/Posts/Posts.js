import React, { useEffect, useState } from "react";
import axios from "axios";
import "./posts.scss";

const Posts = () => {
  const [Data, setData] = useState({
    HotelName: "",
    Place: "",
    Price: "",
    Discription: "",
    ImgaUrl: [],
  });
  const [ImgaUrl, setimgaUrl] = useState([]);

  console.log(Data);
  console.log(ImgaUrl);

  const uplodeHandler = (e) => {
    e.preventDefault();
  };

  // console.log(UplodData);
  const AllDataCollectedHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/admin/uplodehotelDeteals", [
        { ...Data, ImgaUrl: ImgaUrl },
      ])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div class="table-reponsive box">
        <table id="example" class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>all</th>
              <th>Hotel Name</th>
              <th>Place</th>
              <th>Price</th>
              <th>Discription</th>
              <th>Imges</th>
              <th>highlights</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Tiger Nixon</td>

              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
          </tbody>
        </table>
      </div>
      <form className="admin-form" method="post">
        <div className="wrap">
          <input
            onChange={(e) =>
              setData({ ...Data, [e.target.name]: e.target.value })
            }
            type="text"
            name="HotelName"
          />
          <span>Hotel Name</span>
        </div>
        <div className="wrap">
          <input
            onChange={(e) =>
              setData({ ...Data, [e.target.name]: e.target.value })
            }
            type="text"
            name="Place"
          />
          <span>Place</span>
        </div>
        <div className="wrap">
          <input
            onChange={(e) =>
              setData({ ...Data, [e.target.name]: e.target.value })
            }
            type="number"
            name="Price"
          />
          <span>Price</span>
        </div>
        <div className="wrap">
          <input
            onChange={(e) =>
              setData({ ...Data, [e.target.name]: e.target.value })
            }
            type="text"
            name="Discription"
          />
          <span>Discription</span>
        </div>
        <div className="wrap">
          <input
            onChange={(e) =>
              setimgaUrl([
                ...ImgaUrl,
                ([e.target.name] = URL.createObjectURL(e.target.files[0])),
              ])
            }
            type="file"
            name={"imgUrl"}
          />
        </div>

        <select name="highlights">
          <option value="first">First Value</option>
          <option value="second" selected>
            Second Value
          </option>
          <option value="third">Third Value</option>
        </select>
      </form>
      <button
        className="btn btn-success"
        type="submit"
        onClick={AllDataCollectedHandler}
      >
        submit
      </button>
    </>
  );
};

export default Posts;
