var proxy = {
  // '/api/': {
  //   changeOrigin: true,
  //   target: ''
  // },
}

var entry = ['index']

var vendor = [
  'react',
  'react-dom',
  'react-router',
  'react-router-dom',
  'axios',
  'redux',
  'react-redux',
  'redux-thunk',
  'react-loadable',
  'react-tap-event-plugin',
  'lodash',
  'font-awesome/scss/font-awesome.scss',
  'normalize.css',
  'antd',
  'antd/dist/antd.css'
]

var baseUrl = '/'

module.exports = {
  vendor,
  entry,
  proxy,
  baseUrl
}