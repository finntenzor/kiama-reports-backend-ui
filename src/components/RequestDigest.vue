<template>
  <div class="report-request-digest">
    <mu-flex>
      <mu-chip :color="color">{{ upperMethod }}</mu-chip>
      <div class="report-request-digest-url">
        <span class="report-request-digest-short-url">{{ shortUrl }}</span>
      </div>
      <mu-icon @click="change" :value="dock ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" />
    </mu-flex>
    <span v-if="dock">{{ url }}</span>
  </div>
</template>

<script>
const reg = /^(http(s)?:\/\/)?((\w|\.)+)(:\d+)?/g

export default {
  name: 'ReportRequestDigest',
  props: {
    method: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dock: false
    }
  },
  computed: {
    color() {
      const map = {
        'GET': 'blue400',
        'POST': 'lightGreen400',
        'PUT': 'amber400',
        'DELETE': 'red400'
      }
      return map[this.upperMethod] || 'grey400'
    },
    upperMethod() {
      return this.method.toUpperCase()
    },
    shortUrl() {
      return this.url.replace(reg, '')
    }
  },
  methods: {
    change() {
      this.dock = !this.dock
    }
  }
}
</script>

<style>
.report-request-digest {
  padding: 12px;
  font-size: 1.2em;
  word-wrap: break-word;
}
.report-request-digest-url {
  align-self: stretch;
  flex-grow: 1;
  position: relative;
}
.report-request-digest-short-url {
  position: absolute;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
