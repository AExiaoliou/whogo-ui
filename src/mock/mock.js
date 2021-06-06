import Mock from 'mockjs'

Mock.mock('https://localhost:10231/user', {
  'name': '@name',
  'email': '@email',
  'age|1-10': 5
})
