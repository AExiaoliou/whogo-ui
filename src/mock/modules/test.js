export function test (params) {
  let data = {
    code: 200,
    msg: 'test',
    data: {
      name: '赵芝锴'
    }
  }
  return {
    url: 'test/test',
    type: 'get',
    data: data
  }
}
