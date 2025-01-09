// import axios from "axios"

const API_URL = 'http://localhost:3000/api/v1/user/'

const register = (role, data) => {
  return axios.post(API_URL + 'signup', {
    role,
    username,
    companyName,
    email,
    phone,
    password,
    subscription,
  })
}

const login = (username, password) => {
  return axios
    .post(API_URL + 'login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
  return axios.post(API_URL + 'signout').then((response) => {
    return response.data
  })
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService
