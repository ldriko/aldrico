<script>
export default {
  name: 'TextSection'
}
</script>

<script setup>
const props = defineProps({
  imagePath: {
    type: String,
    default: null
  },
  imageAlternative: {
    type: String,
    default: null
  },
  imageClass: {
    type: String,
    default: 'left'
  },
  title: {
    type: String,
    default: null
  },
  titleClass: {
    type: String,
    default: '3xl'
  }
})
</script>

<template>
  <section :class="`${imagePath ? 'with-image' : null} mb-5`">
    <img
        v-if="imagePath"
        :src="imagePath"
        :alt="imageAlternative ?? imagePath"
        :class="`${imageClass} object-cover w-44 h-64 ml-5`"
    />
    <h1 :class="`${titleClass} mb-3`">{{ title }}</h1>
    <slot/>
  </section>
</template>

<style scoped>
section.with-image::after {
  content: '';
  display: table;
  clear: both;
}
</style>