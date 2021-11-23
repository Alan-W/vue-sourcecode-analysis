/* Vue 源码中的一些函数 */

// 返回数据的原始类型
const toRawType = val => {
  return Object.prototype.toString.call(val).slice(8, -1)
}

console.log('/************************  test toRawType start   ************************/')
console.log(toRawType({})) // Object
console.log(toRawType(new Date())) // Date
console.log(toRawType(new RegExp())) // Date
console.log('/************************  test toRawType end   ************************/')

// 为一个纯函数创建一个缓存版本
const cached = fn => {
  const cache = Object.create(null)
  console.log('cache in func is ： --', cache)
  return (
    function cachedFn(str) {
      const hit = cache[str]
      console.log('hit', hit)
      console.log('cache', cache)
      return hit || (cache[str] = fn(str))
    }
  )
}

// 驼峰化连字符分隔的字符串
const camlizeRe = /-(\w)/g
const camelizeStr = str => {
  return cached(function(str) {
    return str.replace(camlizeRe, function(_, c) {
      return c ? c.toUpperCase() : ''
    })
  })
}

console.log('/************************  test camelizeStr start   ************************/')
console.log('camelizeStr abc-aaa', camelizeStr()('abc-aaa-ddd'))
console.log('camelizeStr abc-aaa', camelizeStr()('abc-aaa-ddd'))
console.log('camelizeStr abc-bbb', camelizeStr()('abc-bbb-eee'))
console.log('/************************  test camelizeStr end   ************************/')