export default {
  baseUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:8001' : 'http://119.23.241.152:8888/admin-api',
  Mock: process.env.NODE_ENV !== 'production',
  // Mock: false
  defaultPage: {
    pageNum: 1,
    pageSize: 5,
    params: [
      {
        additionalProp1: {},
        additionalProp2: {},
        additionalProp3: {}
      }
    ]
  }
}
