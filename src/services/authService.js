import axios from 'axios';


const API_URL = 'http://localhost:8080/api/auth/';



const register = (username, email, password) => {
    return axios.post(API_URL + 'register', {
        username,
        email,
        password,
        nombre: username,
    });
};

const login = async (identifier, password) => {
    return axios
        .post(API_URL + 'login', {
            identifier,
            password
        })
        .then((response) => {
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data.data));
            }

            return response.data;
        });
}



const logout = () => {
    localStorage.removeItem('user');
};


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}


const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? true : false  ;
}

export default {
    register,
    login,
    logout,
    getCurrentUser,
    isAuthenticated
};
