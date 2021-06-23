export function test (params) {
  let data = { code: 200, msg: 'test', data: 1 }
  return {
    url: 'test/test',
    type: 'get',
    data: data
  }
}
