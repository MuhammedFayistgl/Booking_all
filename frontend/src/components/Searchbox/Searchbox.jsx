import React from "react";

import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FormSummitStatus, bockingDate, optionsDicress, optionsIngreass, setDestination } from "../../Reducs/SearchSlice";

import "./searchbox.scss";
import '../../components/header/Header.scss';
import { Container } from "@mui/material";

const Searchbox = ({ type, butonDesable ,confm}) => {
  /**
   * ! Collect Data From reducx store
   */
  const destination = useSelector((itemSelect) => itemSelect.SearchSlice.destination);
  const date = useSelector((itemSelect) => itemSelect.SearchSlice.date[0]);
  const options = useSelector((itemSelect) => itemSelect.SearchSlice.options);
  /**************************************************************************** */
  const dispatch = useDispatch();

  /**
   * ? STATE ------------------------
   */
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();

  const [openOptions, setOpenOptions] = useState(false);
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  });
  /***************************************** */

  return (
    <>
      <div
        className={ type ? "hotellist " : `headerSearch ${confm && `addPositon `}`}
        style={butonDesable ? { width: "76%", justifyContent: "center",    bottom:" 453px" } : { width: "100%" }}
      >
        {!butonDesable && (
          <div className="headerSearchItem onlylg">
            <i className="fa-solid fa-bed headerIcon"></i>
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => dispatch(setDestination(e.target.value))}
              value={destination}
            />
          </div>
        )}

        <div className="headerSearchItem">
          <i className="fa-solid fa-calendar-days headerIcon"></i>
          <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
            {`${date.startDate} - ${date.endDate}`}
          </span>

          {openDate && (
            <DateRange
              onChange={(item) => {
                setState({ ...state, ...item });
                dispatch(bockingDate(item.selection));
                dispatch(FormSummitStatus(1));
              }}
              months={1}
              minDate={new Date()}
              direction="vertical"
              scroll={{ enabled: false }}
              ranges={[state.selection]}
              className="date"
            />
          )}
        </div>
        <div className="headerSearchItem">
          <i className="fa-solid fa-person headerIcon"></i>
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
          >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => dispatch(optionsDicress("adult"))}>
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={() => dispatch(optionsIngreass("adult"))}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => dispatch(optionsDicress("children"))}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={() => dispatch(optionsIngreass("children"))}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => dispatch(optionsDicress("room"))}>
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={() => dispatch(optionsIngreass("room"))}>
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem onlylg">
          {!butonDesable && (
            <button
              className="headerBtn header-search-button"
              // onClick={() => {
              //   navigate("/hotelslist", {
              //     state: { destination, date, options },
              //   });
              // }}
            >
              Search
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Searchbox;
