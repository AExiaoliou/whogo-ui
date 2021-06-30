import axios from '../axios'

export const deleteCafemember = (data) => {
  return axios({
    url: '/sysCafemember/delete',
    method: 'post',
    data
  })
}

export const findById = (params) => {
  return axios({
    url: '/sysCafemember/findById',
    method: 'get',
    params
  })
}

export const findPage = (data) => {
  return axios({
    url: '/sysCafemember/findPage',
    method: 'post',
    data
  })
}

export const save = (data) => {
  return axios({
    url: '/sysCafemember/save',
    method: 'post',
    data
  })
}
