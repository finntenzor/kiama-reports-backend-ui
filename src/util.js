export function parseTime(time, format = '{y}-{m}-{d} {h}:{i}:{s}') {
  if (arguments.length === 0) {
    return null
  }
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}

/**
 * Source:
 * https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
 * https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 *
 * @param {String} str the string to be hashed
 */
export function hashCode(str) {
  var hash = 0; var i; var chr
  if (str.length === 0) return hash
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}
