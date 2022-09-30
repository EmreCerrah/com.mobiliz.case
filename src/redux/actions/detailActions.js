import * as actionsTypes from "./actionType";

export function selectVehicle(vehicle) {
  return { type: actionsTypes.SELECT_VEHICLES, payload: vehicle };
}
export function saveVehicleSuccess(vehicle) {
  return { type: actionsTypes.SAVE_VEHICLE_SUCCESS, payload: vehicle };
}

export function postVehicle(vehicle) {

  let credentials = btoa("v.emrecerrah@gmail.com:12345");
  let auth = { "Authorization" : `Basic ${credentials}` };

  return function (dispatch) {
    let url = `https://test001.testnet.mobiliz.com.tr/interview/vehicles/${vehicle.id}`;

  

    return fetch(url, {
      method: 'PUT',
      headers : auth,
      body:JSON.stringify(vehicle)
    }
      )
      .then((Response) => Response.json())
      .then((data) =>{console.log('Success:', data);dispatch(saveVehicleSuccess(data));})
      .catch((error) => {
        console.error('Error:', error);
      });
  };
}