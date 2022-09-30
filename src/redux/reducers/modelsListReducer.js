import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function modelsListReducer(state = initialState.models, action) {
  switch (action.type) {
    case actionTypes.GET_MODEL_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
