import { configureStore } from "@reduxjs/toolkit";
import modelsListReducer from "./modelsListReducer";
import vehiclesListReducer from "./vehiclesListReducer";
import detailReducer from "./detailReducer";
export const store = configureStore({
  reducer: {
    detailReducer,
    modelsListReducer,
    vehiclesListReducer,
   
  },

});
