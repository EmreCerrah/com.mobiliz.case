import * as actionType from "./actionType";

export function getVehiclesSuccess(vehicles) {
  return { type: actionType.GET_VEHICLES_SUCCESS, payload: vehicles };
}

export function getVehicles(brand) {
  return function (dispatch) {
    let url = "https://test001.testnet.mobiliz.com.tr/interview/vehicles";

    let credentials = btoa("v.emrecerrah@gmail.com:12345");
    let auth = { Authorization: `Basic ${credentials}` };

    return fetch(url, {
      headers: auth,
    })
      .then((Response) => Response.json())
      .then((data) => {
        if (brand) {
          dispatch(
            getVehiclesSuccess(
              data.filter((vehicle) => vehicle.brand === brand)
            )
          );
        } else {
          dispatch(getVehiclesSuccess(data));
        }
      });
  };
}
