import * as actionType from "./actionType";

export function getModelsSuccess(results) {
  return { type: actionType.GET_MODEL_SUCCESS, payload: results };
}

export function getModels(brand) {
  let credentials = btoa("v.emrecerrah@gmail.com:12345");
  let auth = { Authorization: `Basic ${credentials}` };

  return function (dispatch) {
    let url;
    if (brand) {
      url = `https://test001.testnet.mobiliz.com.tr/interview/models/${brand}`;
    }

    url = "https://test001.testnet.mobiliz.com.tr/interview/models";
    return fetch(url, {
      headers: auth,
    })
      .then((Response) => Response.json())
      .then((data) => {
        dispatch(getModelsSuccess(data));
      });
  };
}
