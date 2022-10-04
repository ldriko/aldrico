<script>
export default {
  name: 'TextSection'
}
</script>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  subtitle: {
    type: String,
    default: null
  },
})
</script>

<template>
  <div>
    <h1 v-if="title">{{ title }}</h1>
    <h2 v-if="subtitle">{{ subtitle }}</h2>
    <slot/>
  </div>
</template>

<style scoped>
</style>