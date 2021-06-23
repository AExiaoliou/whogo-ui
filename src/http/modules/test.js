import axios from '../axios'

export const test = () => {
  return axios({
    url: '/test/test',
    method: 'get'
  })
}
