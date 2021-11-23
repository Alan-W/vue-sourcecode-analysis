<template>
  <section class="child1">
    <p>child1: {{ key }}</p>
    <p>props from parent: {{raw}}</p>
  </section>
</template>

<script>
export default {
  name: 'child1',
  props: ['raw'],
  data() {
    return {
      key: 'child1 key'
    }
  }
}
</script>