<template>
  <section>
    <div>rawType: {{ rawType }}</div>
    <div>object: {{ object.key }}</div>
    <div>array: 
      <p v-for="(item, index) in array" :key="index">{{ index }} :{{  item.key }}</p>
    </div>
    <div>操作：
      <button @click="handlehangeRawBtn" name="button">make rawType ++</button>
      <button @click="handleChangeObject">add key to object</button>
    </div>
    <section>
    <p>children: </p>
      <child1 :raw="rawType" />
    </section>
  </section>
</template>

<script>
import child1 from './components/child1.vue'
export default {
  name: 'demo',
  components: { child1 },
  data() {
    return {
      rawType: 111,
      object: {
        key: 1
      },
      array: []
    }
  },
  mounted() {
    console.log('this', this)
  },
  methods: {
    handlehangeRawBtn() {
      console.log('this in handlehangeRawBtn', this)
      this.rawType++
    },
    handleChangeObject() {
      this.$set(this.object, 'key2', 2)
    },
  }
}
</script>