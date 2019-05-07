<template>
  <div class="report-data-table">
    <h2 class="report-data-table-title">{{ title }}</h2>
    <mu-divider />
    <table v-for="(content, caption) in table" :key="caption" class="report-data-table-table">
      <caption class="report-data-table-caption">
        <span>{{ caption }}</span>
        <small v-if="isEmpty(content)" class="report-data-table-small">empty</small>
      </caption>
      <tbody>
        <tr v-for="(value, key) in content" :key="key">
          <td class="report-data-table-key">{{ key }}</td>
          <td class="report-data-table-value">
            <pre>{{ value }}</pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ReportDataTable',
  props: {
    title: {
      type: String,
      required: true
    },
    table: {
      validator(val) {
        return typeof val === 'object' || val instanceof Array
      },
      required: true
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

<style>
.report-data-table {
  font-family: Consolas, "Liberation Mono", Courier, Verdana, "微软雅黑";
}
.report-data-table-title {
  margin: 8px 0;
  color: #1565c0;
  font-size: 1.2em;
  font-weight: normal;
}
.report-data-table-table {
  width: 100%;
  margin: 12px 0;
  box-sizing: border-box;
  table-layout: fixed;
  word-wrap: break-word;
}
.report-data-table-caption {
  text-align: left;
  font-size: 18px;
  font-weight: bolder;
  padding: 6px 0;
}
.report-data-table-small {
  font-weight: normal;
  display: inline-block;
  margin-left: 10px;
  color: #ccc;
}
.report-data-table-key {
  position: relative;
  font-weight: bold;
  font-size: 12px;
  padding: 0 6px;
  vertical-align: top;
  word-break: break-all;
}
.report-data-table-key::before {
  position: absolute;
  left: -0.4em;
  content: '*';
  font-weight: normal;
}
.report-data-table-value {
  font-family: Consolas, "Liberation Mono", Courier, "微软雅黑";
}
</style>
