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
  imageSrcSet: {
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
  imageWidth: {
    type: Number,
    default: null
  },
  imageHeight: {
    type: Number,
    default: null
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
    <img v-if="imagePath"
         :src="imagePath"
         :srcSet="imageSrcSet"
         :alt="imageAlternative ?? imagePath"
         :class="imageClass"
         :width="imageWidth"
         :height="imageHeight"
         fetchpriority="high"
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

@media screen and (max-width: 380px) {
  img {
    float: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>