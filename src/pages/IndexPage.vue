<script>
export default {
  name: 'IndexPage'
}
</script>

<script setup>
import AboutSection from './AboutSection.vue'
import MusicSection from './MusicSection.vue'
import SocialSection from './SocialSection.vue'
import AchievementSection from './AchievementSection.vue'
import ProjectSection from './ProjectSection.vue'
import WritingSection from './WritingSection.vue'
import MainSection from './MainSection.vue'
</script>

<template>
  <main-section/>
  <writing-section/>
  <project-section/>
  <achievement-section/>
  <social-section/>
  <music-section/>
  <about-section/>
</template>