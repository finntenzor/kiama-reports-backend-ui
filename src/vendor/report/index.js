import { Toast } from '@/vendor/muse'

export default {
  methods: {
    reportError(error) {
      if (error.response) {
        Toast.error('错误：' + error.response.data.message)
        console.error('响应异常:', error.response)
      } else {
        Toast.error('异常：' + error.message)
      }
    }
  }
}
