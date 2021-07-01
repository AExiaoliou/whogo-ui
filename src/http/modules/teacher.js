import axios from '../axios'

export const batchDelete = (data) => {
  return axios({
    url: '/sysTeacher/delete',
    method: 'post',
    data
  })
}

export const findById = (params) => {
  return axios({
    url: '/sysTeacher/findById',
    method: 'get',
    params
  })
}

export const findPage = (data) => {
  return axios({
    url: '/sysTeacher/findPage',
    method: 'post',
    data
  })
}

export const save = (data) => {
  return axios({
    url: '/sysTeacher/save',
    method: 'post',
    data
  })
}
