<template>
  <div>
    <request-digest :method="exception.method" :url="exception.url" />
    <pre>{{ exception.details.echo }}</pre>
    <exception-digest
      :code="exception.details.code"
      :name="exception.details.name"
      :file="exception.details.file"
      :line="exception.details.line"
      :message="exception.details.message" />
    <mu-divider />
    <source-code
      :error-line="exception.details.line"
      :first="exception.details.source.first"
      :source="exception.details.source.source" />
    <trace-stack
      :trace="fullTrace" />
    <data-table
      v-if="!isEmpty(exception.details.data)"
      title="Exception Data"
      :table="exception.details.data" />
    <data-table
      title="Environment Variables"
      :table="exception.details.tables" />
    <mu-divider />
    <p>ThinkPHP V{{ exception.details.think_version }}</p>
  </div>
</template>

<script>
import RequestDigest from '@/components/RequestDigest'
import ExceptionDigest from '@/components/ExceptionDigest'
import SourceCode from '@/components/SourceCode'
import TraceStack from '@/components/TraceStack'
import DataTable from '@/components/DataTable'

export default {
  name: 'ReportView',
  components: {
    RequestDigest,
    ExceptionDigest,
    SourceCode,
    TraceStack,
    DataTable
  },
  props: {
    exception: {
      type: Object,
      required: true
    }
  },
  computed: {
    fullTrace() {
      const details = this.exception.details
      const copy = [...details.trace]
      copy.unshift({
        file: details.file,
        line: details.line
      })
      return copy
    }
  },
  methods: {
    isEmpty(target) {
      for (const key in target) {
        return false
      }
      return true
    }
  }
}
</script>
