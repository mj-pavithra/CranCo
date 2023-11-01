import axios from 'axios';
import Cookies from 'js-cookie';

const hostUrl = 'http://localhost:8081';

const instance = axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token");
        console.log("this token is from axios config ", token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            window.location.href = "http://localhost:3000/login";
            console.log("axios config failed!")
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

function validateToken(token) {
    axios.post(hostUrl + "/api/v1/auth/validate-token", {
        token: "this is token"
    }).then((response) => {
        if (response.status == 200) {
            return true;
        }
        return false;
    }).catch((error) => {
        return false;
    })
}

export default instance;
