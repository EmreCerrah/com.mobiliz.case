import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function detailReducer(
  state = initialState.selectedVehicle,
  action
) {
  switch (action.type) {
    case actionTypes.SELECT_VEHICLES:
      return action.payload;

    case actionTypes.SAVE_VEHICLE_SUCCESS:
      return action.payload;
  
    default:
      return state;
  }
}
