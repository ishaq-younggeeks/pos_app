import axios from 'axios'
import {Config} from '../../../config/Config'

export function PostData(type, userData) {
  console.log(type)
  console.log(userData)
  // http://posapp.younggeeks.net/posApi/api/add-restaurent
  return new Promise((resolve, reject) => {
    let BaseUrl = `${Config.url}`
    // let BaseUrl = "http://posapp.younggeeks.net/posApi/api/";
    fetch(BaseUrl + type, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers":
          "Origin, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers,Authorization,Content-Type"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
        console.log(responseJson);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function GetData(type) {
  let BaseUrl = `${Config.url}`
  return new Promise((resolve, reject) => {
    fetch(BaseUrl + type, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers":
          "Origin, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers,Authorization,Content-Type"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function DeleteData(type, id) {
  let BaseUrl = `${Config.url}` 
  return new Promise((resolve, reject) => {
    fetch(BaseUrl + type + "/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers":
          "Origin, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers,Authorization,Content-Type"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function EditData(type, id ) {
  let BaseUrl = `${Config.url}`
  return new Promise((resolve, reject) => {
    fetch(BaseUrl + type + "/" + id, {
      method: "POST",
      // body: JSON.stringify(user_id),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers":
          "Origin, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers,Authorization,Content-Type"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson);
        console.log(responseJson)
      })
      .catch(error => {
        reject(error);
      });
  });
}

// export function editPromo(type,id,data) {
//   let myData = {
//     user_id : data.user_id,
//     name : data.name,
//     price : data.price,
//     description : data.description,
//     eating_opt : data.eating_opt,
//     timing_from : data.timing_from,
//     timing_to : data.timing_to,
//     date_from : data.date_from,
//     date_to : data.date_to,
//     image : data.image
//   }
//   let BaseUrl = `http://posapp.younggeeks.net/posApi/api/${type}/${id}`
//   axios({
//     method:'post',
//     url:BaseUrl,
//     data: myData,
//   }) .then (response => {
//     console.log(response)
//   }) .catch (error => {
//     console.log(error)
//   })
// }