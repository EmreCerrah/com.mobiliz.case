import * as actionsTypes from "./actionType";

export function selectVehicle(vehicle) {
  return { type: actionsTypes.SELECT_VEHICLES, payload: vehicle };
}
export function removeToCart(product) {
  return { type: actionsTypes.REMOVE_TO_CART, payload: product };
}
