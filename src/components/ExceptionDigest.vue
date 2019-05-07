<template>
  <div class="report-exception-digest">
    <mu-flex wrap="wrap">
      <div class="report-exception-digest-line-one">
        <span>[{{ code }}]&nbsp;</span>
        <span class="report-exception-digest-name" :title="name">{{ name | last }}</span>
        <span>&nbsp;in</span>
      </div>
      <div class="report-exception-digest-line-two">
        <a class="report-exception-digest-file" :href="file" :title="'#' + line + ' ' + file">{{ file | last }} line {{ line }}</a>
      </div>
    </mu-flex>
    <mu-divider />
    <p class="report-exception-digest-message">{{ message }}</p>
  </div>
</template>

<script>
import { last } from './filters'

export default {
  name: 'ReportExceptionDigest',
  filters: {
    last: last
  },
  props: {
    code: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    file: {
      type: String,
      required: true
    },
    line: {
      type: Number,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.report-exception-digest {
  font-family: Consolas, "Liberation Mono", Courier, Verdana, "微软雅黑";
}
.report-exception-digest-line-one {
  margin-right: 12px;
  color: #1565c0;
  font-size: 1.2em;
}
.report-exception-digest-name {
  cursor: help;
  text-decoration: underline;
  text-decoration-style: dotted;
}
.report-exception-digest-file {
  font-size: 1.2em;
  color: #868686;
  cursor: pointer;
}
.report-exception-digest-file:hover {
  text-decoration: underline;
}
.report-exception-digest-message {
  margin: 4px 0;
  font-size: 1.4em;
  word-break: break-all;
  white-space: pre-wrap;
}
</style>
