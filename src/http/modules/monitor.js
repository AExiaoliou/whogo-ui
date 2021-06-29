import axios from '../axios'

export const getSystem = () => {
  return axios({
    url: 'monitor/server',
    method: 'get'
  })
}
