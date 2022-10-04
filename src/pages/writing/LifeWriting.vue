<script>
export default {
  name: 'LifeWriting'
}
</script>

<script setup>
import VueMarkdown from 'vue-markdown-render'
</script>

<template>
  <vue-markdown source="# Test {.text-3xl}"/>
</template>