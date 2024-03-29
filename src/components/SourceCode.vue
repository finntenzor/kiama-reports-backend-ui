<template>
  <mu-flex class="report-source-code">
    <!-- 行号 -->
    <ol class="report-source-code-lineno-list">
      <li
        v-for="code in codeList"
        :key="code.lineno"
        :class="{ 'error': code.lineno === errorLine}"
        class="report-source-code-lineno">{{ code.lineno }}</li>
    </ol>
    <!-- 源代码 -->
    <div class="report-source-code-code-outter">
      <pre
        class="report-source-code-code-inner"
        :style="{
          'background-position': `0 ${errorLineY}px`
        }"
        ref="code">{{ codes }}</pre>
    </div>
  </mu-flex>
</template>

<script>
import hljs from '@/vendor/hljs'

export default {
  name: 'ReportSourceCode',
  props: {
    errorLine: {
      type: Number,
      required: true
    },
    first: {
      type: Number,
      required: true
    },
    source: {
      type: Array,
      required: true
    }
  },
  computed: {
    codeList() {
      const list = []
      const codes = (this.source instanceof Array) ? this.source : ['// 无法载入源代码']
      for (let i = 0; i < codes.length; i++) {
        const line = codes[i]
        const lineno = parseInt(this.first) + i
        list.push({
          lineno,
          line
        })
      }
      return list
    },
    codes() {
      return this.codeList.map(item => item.line).join('')
    },
    errorLineY() {
      return 7 + 21 * (this.errorLine - this.first)
    }
  },
  mounted() {
    const ref = this.$refs.code
    if (ref instanceof Array) {
      for (const dom of ref) {
        hljs.highlightBlock(dom)
      }
    } else {
      hljs.highlightBlock(ref)
    }
  }
}
</script>

<style>
.report-source-code {
  margin-top: 8px;
}
/* 清除ol默认样式 */
.report-source-code-lineno-list,
.report-source-code-code-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
/* 源代码部分占用右部剩余空间并可以水平滚动 */
.report-source-code-code-outter {
  position: relative;
  flex-grow: 1;
  align-self: stretch;
}
.report-source-code-code-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  /* 源代码不换行 */
  white-space: pre;
}
pre.report-source-code-code-inner {
  padding: 7px 0.5em;
  background-image: url('~@/assets/error_line.png');
  background-repeat: repeat-x;
}
/* 行号右对齐 */
.report-source-code-lineno-list {
  padding: 7px 0;
  border-right: 1px solid #858585;
  text-align: right;
  background-color: #1e1e1e;
  font-family: "Century Gothic", Consolas, "Liberation Mono", Courier, Verdana;
}
.report-source-code-lineno {
  padding: 0 2px;
  line-height: 21px;
  height: 21px;
  color: #858585;
}
.report-source-code-lineno.error {
  background-color: #da1a14;
}
.report-source-code-code-list {
  min-width: 100%;
}
</style>
