import axios from 'axios'

const baseUrl = 'http://localhost:3001'

const login = userData => {
  const response = axios.post(baseUrl + '/auth/login', userData)
  return response.then(response => response.data)
}

const signUp = userData => {
  const response = axios.post(baseUrl + '/auth/signup', userData)
  return response.then(response => response.data)
}

const moduleExport = { login, signUp }

export default moduleExport
