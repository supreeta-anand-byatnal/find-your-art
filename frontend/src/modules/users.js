import axios from 'axios'

const baseUrl = 'http://localhost:3001'

const login = userData => {
  const response = axios.post(baseUrl + '/auth/login', userData)
  return response.then(response => response.data)
}

const moduleExport = { login }

export default moduleExport
