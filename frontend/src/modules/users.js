import axios from 'axios'

const baseUrl = 'http://localhost:3001/login'

const login = () => {
  const response = axios.post(baseUrl)
  return response.then(response => response.data)
}

const moduleExport = { login }

export default moduleExport
