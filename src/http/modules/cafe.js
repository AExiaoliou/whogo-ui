import axios from '../axios'

export const batchDelete = (data) => {
  return axios({
    url: '/sysCafe/delete',
    method: 'post',
    data
  })
}

export const findById = (params) => {
  return axios({
    url: '/sysCafe/findById',
    method: 'get',
    params
  })
}

export const findPage = (data) => {
  return axios({
    url: '/sysCafe/findPage',
    method: 'post',
    data
  })
}

export const save = (data) => {
  return axios({
    url: '/sysCafe/save',
    method: 'post',
    data
  })
}
