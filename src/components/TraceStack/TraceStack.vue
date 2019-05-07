<template>
  <div class="report-trace-stack">
    <h2 class="report-trace-stack-title">Call Stack</h2>
    <mu-divider />
    <ol class="report-trace-stack-stack">
      <trace-item
        v-for="(item, i) in trace"
        :key="i"
        :item="item"
      />
    </ol>
  </div>
</template>

<script>
import { last } from './index'
import TraceItem from './TraceItem'

export default {
  name: 'ReportTraceStack',
  components: {
    TraceItem
  },
  filters: {
    last
  },
  props: {
    trace: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.report-trace-stack {
  font-family: Consolas, "Liberation Mono", Courier, Verdana, "微软雅黑";
}
.report-trace-stack-title {
  margin: 8px 0;
  color: #1565c0;
  font-size: 1.2em;
  font-weight: normal;
}
</style>
