import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function vehiclesListReducer(
  state = initialState.vehicles,
  action
) {
  switch (action.type) {
    case actionTypes.GET_VEHICLES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
