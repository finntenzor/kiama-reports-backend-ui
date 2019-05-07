import request from 'axios'

const CONFIG = {
  API_URL: ''
}
const DEFAULT_API_URL = '/dev/reports_backend/reports'

// API_URL
if (process.env.NODE_ENV === 'development') {
  if (process.env.VUE_APP_API_URL) {
    CONFIG.API_URL = process.env.VUE_APP_API_URL
  } else {
    CONFIG.API_URL = DEFAULT_API_URL
  }
} else {
  const meta = document.getElementsByTagName('meta')['api-url']
  if (meta) {
    CONFIG.API_URL = meta.content
  } else {
    CONFIG.API_URL = DEFAULT_API_URL
  }
}

export function getReportAtPage(page) {
  return request({
    url: CONFIG.API_URL + '/',
    method: 'get',
    params: {
      page
    }
  })
}

export function getReportById(id) {
  return request({
    url: CONFIG.API_URL + '/' + id,
    method: 'get'
  })
}

export function removeReportById(id) {
  return request({
    url: CONFIG.API_URL + '/' + id,
    method: 'delete'
  })
}
