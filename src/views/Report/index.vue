<template>
  <mu-container v-if="id >= 0 && info !== null" class="view-report" v-loading="loading">
    <report-view :exception="info" />
  </mu-container>
  <mu-container v-else-if="loading" class="view-report-none">
    <mu-alert color="info">
      <mu-icon left value="info"></mu-icon>
      <span>加载中</span>
    </mu-alert>
  </mu-container>
  <mu-container v-else class="view-report-none">
    <mu-alert color="error">
      <mu-icon left value="warning"></mu-icon>
      <span>无此报告</span>
    </mu-alert>
    <mu-button @click="$router.go(-1)" color="blue600" class="view-report-none-back">返回</mu-button>
  </mu-container>
</template>

<script>
import ReportView from './ReportView'
import { getReportById } from '@/api'

export default {
  name: 'BackendReport',
  components: {
    ReportView
  },
  data() {
    return {
      loading: false,
      info: null
    }
  },
  computed: {
    id() {
      const id = parseInt(this.$route.params.id)
      return isNaN(id) ? -1 : id
    }
  },
  watch: {
    id(val) {
      this.readReport(val)
    }
  },
  created() {
    if (this.id >= 0) {
      this.readReport(this.id)
    }
  },
  methods: {
    async readReport(id) {
      this.loading = true
      try {
        const { data } = await getReportById(id)
        this.info = data
      } catch (err) {
        this.info = null
        this.reportErrorMixin(err)
      }
      this.loading = false
    }
  }
}
</script>

<style>
.view-report-none {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mu-button.view-report-none-back {
  margin-top: 50px;
}
</style>
