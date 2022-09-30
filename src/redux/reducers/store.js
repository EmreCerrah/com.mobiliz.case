import { configureStore } from "@reduxjs/toolkit";
import modelsListReducer from "./modelsListReducer";
import vehiclesListReducer from "./vehiclesListReducer";
import detailReducer from "./detailReducer";
import saveProductReducer from "./saveProductReducer";
export const store = configureStore({
  reducer: {
    detailReducer,
    modelsListReducer,
    vehiclesListReducer,
    saveProductReducer,
   
  },

});
