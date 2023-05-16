import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

/**
 * ! INITIOAL_SATE */
let initialState = {
  destination: "",
  date: [
    {
      startDate: "Check-in",
      endDate: "Check-out",
      key: "selection",
     
    },
  ],

  options: {
    adult: 1,
    children: 0,
    room: 1,
  },
  price: {
    minPrice: "",
    maxPrice: "",
  },
  formSummit:{
    status:0
  }
};

const serchSlice = createSlice({
  name: "hederSerch",
  initialState,
  reducers: {
    //* This reduces update  search input values

    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    /**  this reducer changes the options value */
    optionsIngreass: (state, action) => {
      if (action.payload === "adult") {
        state.options.adult += 1;
      } else if (action.payload === "children") {
        state.options.children += 1;
      } else if (action.payload === "room") {
        state.options.room += 1;
      }
    },
    optionsDicress: (state, action) => {
      if (action.payload === "adult") {
        state.options.adult -= 1;
      } else if (action.payload === "children") {
        state.options.children -= 1;
      } else if (action.payload === "room") {
        state.options.room -= 1;
      }
    },
    optionsUpdate: (state, action) => {
      if (action.payload.targut === "adult") {
        state.options.adult = action.payload.value;
      } else if (action.payload.targut === "children") {
        state.options.children = action.payload.value;
      } else if (action.payload.targut === "room") {
        state.options.room = action.payload.value;
      }
    },
    bockingDate: (state, action) => {
      let ET = format(action.payload.endDate, "MM/dd/yyyy");
      let ST = format(action.payload.startDate, "MM/dd/yyyy");

      state.date[0].startDate = ST;
      console.log("start state changed");
      state.date[0].endDate = ET;
      console.log("end dat chenge ");
    },
    priceHandler: (state, action) => {
      if (action.payload.type === "maxPrice") {
        state.price.minPrice = action.payload.value;
      } else if (action.payload.type === "minPrice") {
        state.price.minPrice = action.payload.value;
      }
    },
    FormSummitStatus : (state, action) =>{
      state.formSummit.status = action.payload
      console.log('dispach valu',action.payload);
     
    }
  },
});

export const { setDestination, optionsIngreass, optionsDicress, bockingDate, optionsUpdate, priceHandler ,FormSummitStatus} = serchSlice.actions;
export default serchSlice.reducer;
