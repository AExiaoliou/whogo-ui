import axios from 'axios'

export const getSystem = () => {
  return axios({
    url: 'monitor/system',
    method: 'get'
  })
}
