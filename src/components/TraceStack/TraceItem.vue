<template>
  <li class="report-trace-item">
    <span v-if="item['function']">at </span>
    <span v-if="item['class']" class="report-trace-item-class" :title="item['class']">{{ item['class'] | last }}</span>
    <span v-if="item['type']">{{ item['type'] }}</span>
    <template v-if="item['function']">
      <span class="report-trace-item-function">{{ item['function'] }}</span>
      <span>(</span>
      <TraceArg type="array" :value="item.args" :array-boundary="false" />
      <span>)</span>
      <span>&nbsp;</span>
    </template>
    <template v-if="item['file'] && item['line']">
      <span>in </span>
      <a class="report-trace-item-file" :href="item['file']" :title="'#' + item['line'] + ' ' + item['file']">{{ item['file'] | last }} line {{ item['line'] }}</a>
    </template>
  </li>
</template>

<script>
import TraceArg from './TraceArg'
import { last } from './index'

export default {
  name: 'ReportTraceItem',
  components: {
    TraceArg
  },
  filters: {
    last
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.report-trace-item {
  word-break: break-all;
}
.report-trace-item-class {
  color: #792c6e;
  font-weight: bold;
  cursor: help;
}
.report-trace-item-class:hover {
  text-decoration: underline;
}
.report-trace-item-function {
  color: #bb1166;
}
.report-trace-item-file {
  color: #868686;
  cursor: pointer;
}
.report-trace-item-file:hover {
  text-decoration: underline;
}
</style>
