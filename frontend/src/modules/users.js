import axios from 'axios'

const login = userData => {
  const response = axios.post('/auth/login', userData)
  return response.then(response => response.data)
}

const signUp = userData => {
  const response = axios.post('/auth/signup', userData)
  return response.then(response => response.data)
}

const moduleExport = { login, signUp }

export default moduleExport
