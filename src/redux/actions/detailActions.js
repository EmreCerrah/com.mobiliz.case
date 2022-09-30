import * as actionsTypes from "./actionType";

export function selectVehicle(vehicle) {
  return { type: actionsTypes.SELECT_VEHICLES, payload: vehicle };
}
export function saveVehicleSuccess(vehicle) {
  return { type: actionsTypes.SAVE_VEHICLE_SUCCESS, payload: vehicle };
}

export function postVehicle(vehicle,id) {


  return function (dispatch) {
    let url;
    let requestType;
    if(id!==null||id!==undefined){
    url = `https://test001.testnet.mobiliz.com.tr/interview/vehicles/${id}`;
    requestType="PUT"
    }else{
    url = `https://test001.testnet.mobiliz.com.tr/interview/vehicles`
    requestType="POST"
    }

    let credentials = btoa("v.emrecerrah@gmail.com:12345");
    let auth = { "Authorization" : `Basic ${credentials}`};
  
    return fetch(url, {
      method: requestType,
      headers :{ auth ,'Content-Type': 'application/json'},
      body:JSON.stringify(vehicle)
    })
      .then((Response) => Response.json())
      .then((data) =>{console.log('Success:', data)})
      .catch((error) => {
        console.error('Error:', error);
      });
  };
}