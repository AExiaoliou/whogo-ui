export default {
  baseUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:8001' : 'http://119.23.241.152:9999',
  Mock: process.env.NODE_ENV !== 'production'
  // Mock: false
}
