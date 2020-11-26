import { handle_api_error } from "./errorHandler";
import axios from "axios";
let api_url = "";

//1. Make all your api calls here

function MyFunction1() {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        //2. insert all api request headers here
      };
      const body = {
        //3. body to send to api here
      };
    
      let response = await post_api(body, config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// 4. Get functions only
function  MyFunction2 () {
  return new Promise(async function (resolve, reject) {
    try {
      let config = {
        //5. insert all api request headers here
      };
    
      let response = await get_api(config);
      return resolve(response);
    } catch (err) {
      return reject(err);
    }
  });
}

// base functions

async function post_api(body, config) {
  return new Promise(async function (resolve, reject) {
    axios
      .post(api_url, body, config)
      .then(function (response) {

        //6. Change the response.data to relevant path to response 
        return resolve(response.data);
      })
      .catch(function (error) {
        // 7. Change error.response to exact error response from api 
        if (error.response) {
          
          //8. change error status code to relevant code when server returns error 
          if (error.response.status === 500) {
            return reject(handle_api_error(error.response.data));
          }
        } else {
          return reject(error);
        }
      });
  });
}

async function get_api(config) {
  return new Promise(async function (resolve, reject) {
    axios
      .post(api_url, config)
      .then(function (response) {

        //9. Change the response.data to relevant path to response 
        return resolve(response.data);
      })
      .catch(function (error) {
        // 10. Change error.response to exact error response from api 
        if (error.response) {
          
          //11. change error status code to relevant code when server returns error 
          if (error.response.status === 500) {
            return reject(handle_api_error(error.response.data));
          }
        } else {
          return reject(error);
        }
      });
  });
}



export {
    //12. export the names of all your functions here
    MyFunction1,
    MyFunction2
};
