import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { useDispatch, useSelector } from "react-redux";
import {
  bockingDate,
  optionsUpdate,
  priceHandler,
} from "../../Reducs/SearchSlice";

const List = () => {
  /**
   * ! Collect Data From reducx store
   */
  const destination = useSelector(
    (itemSelect) => itemSelect.SearchSlice.destination
  );
  const date = useSelector((itemSelect) => itemSelect.SearchSlice.date[0]);
  const options = useSelector((itemSelect) => itemSelect.SearchSlice.options);
  const dispatch = useDispatch();
  // const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
  //console.log("location", location);
  //console.log("options", options);
  // console.log('destination',destination);
  // console.log('date',date);
  // console.log('openDate',openDate);
  // console.log('options',options);
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  });

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          {/* <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${date.startDate} - ${date.endDate}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => {
                    setState({ ...state, ...item });
                    dispatch(bockingDate(item.selection));
                  }}
                  minDate={new Date()}
                  ranges={[state.selection]}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    min={1000}
                    placeholder={options.Maxprice}
                    onClick={(itme) => {
                      dispatch(
                        priceHandler({
                          type: "maxPrice",
                          value: itme.target.value,
                        })
                      );
                    }}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    min={1000}
                    onClick={(itme) => {
                      dispatch(
                        priceHandler({
                          type: "minPrice",
                          value: itme.target.value,
                        })
                      );
                    }}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                    onChange={(itme) => {
                      dispatch(
                        optionsUpdate({
                          targut: "adult",
                          value: itme.target.value,
                        })
                      );
                    }}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                    // onChange={(e) => {
                    onChange={(itme) => {
                      dispatch(
                        optionsUpdate({
                          targut: "children",
                          value: itme.target.value,
                        })
                      );
                    }}
                    // }}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                    // onChange={(e) => {
                    onChange={(itme) => {
                      dispatch(
                        optionsUpdate({
                          targut: "room",
                          value: itme.target.value,
                        })
                      );
                    }}
                    // }}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div> */}
          <div className="listResult">
          {/* Search Itm Component */}
            <SearchItem options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
