import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://localhost:8081/api/'
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get('JwtToken');
  console.log(token)
  if (token) {
    console.log(token)
    config.headers.Authorization = `Bearer ${token}`;
  }
  else {
    console.log("token invalid")
  }
  return config;
});

export default instance;


// api.post(
//   "http://localhost:8081/api/v1/auth/authenticate",
//   {
//     username: email,
//     password: password
//   }
// ).then(
//   (response) => {
//     setErrMessege("something went wrong");
//     console.log(response.data)
//     Cookies.set("JwtToken", response.data.token)
//     console.log(Cookies.get('JwtToken'))
//     // sessionStorage.setItem("username", response.data);
//     // window.location.href = "http://localhost:3000/homepage";
//   }
// ).catch(
//   (error) => {
//     console.log(sessionStorage.getItem("username"));
//     if (error.response && error.response.data) {
//       setErrMessege(error.response.data);
//       console.log(errMessege.message);
//     } else {
//       setErrMessege("An error occurred.");
//     }
//   }
// )