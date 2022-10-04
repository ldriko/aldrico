<script>
export default {
  name: 'IndexPage'
}
</script>

<script setup>
import TextSection from '../components/TextSection.vue'
</script>

<template>
  <text-section>
    <p>
      <img class="portrait"
           src="/heaven.webp"
           srcSet="/heaven.webp 1x, /heaven.webp 2x, /heaven.webp 3x, /heaven.webp 4x"
           alt="Heaven"
           width="176"
           height="233"
      />
    </p>
    <h1>Heaven Aldrico</h1>
    <p>Hi&comma; I&rsquo;m Heaven. Loves to code with various languages, learn new technologies and
       implement them in my daily use. Been a gamer my whole life and won’t be retiring anytime
       soon.</p>
    <p>I&rsquo;m also trying a new habit to write my thoughts about anything through my writing.</p>
    <p>
      Currently studying Informatics Engineering at
      <a href="https://www.upnjatim.ac.id/" target="_blank">UPN &ldquo;Veteran&rdquo; Jawa Timur</a>.
    </p>
  </text-section>
  <text-section subtitle="Writing">
    <ul>
      <li>Soon</li>
    </ul>
  </text-section>
  <text-section subtitle="Projects">
    <ul>
      <li><a href="#">Markdown based blog alike</a> Web App</li>
      <li><a href="#">Daily cPanel backup</a> Web Tool</li>
      <li><a href="#">Journal publishing</a> Web App</li>
      <li><a href="https://github.com/ldriko" target="_blank">GitHub</a> — Where all the other magic happens</li>
    </ul>
  </text-section>
  <text-section subtitle="Achievements">
    <ul>
      <li><a href="#">1st place Digital Magazine</a> by Mapion IT</li>
      <li><a href="#">1st place LKS Wilker</a> by the Indonesia's Ministry of Education</li>
      <li><a href="#">3rd place LKS Provinsi</a> by the Indonesia's Ministry of Education</li>
    </ul>
  </text-section>
  <text-section subtitle="Social">
    <ul>
      <li><a href="https://twitter.com/ldriko" target="_blank">Twitter</a></li>
      <li><a href="https://github.com/ldriko" target="_blank">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/heaven-aldrico-28489620a" target="_blank">LinkedIn</a></li>
      <li><a href="https://stackoverflow.com/users/11387759/heaven-aldrico" target="_blank">StackOverflow</a></li>
      <li><a href="https://www.instagram.com/heaven_aldrico/" target="_blank">Instagram</a></li>
      <li><a class="text-black" href="mailto:4d3.h34v3n@gmail.com">4d3.h34v3n@gmail.com</a></li>
    </ul>
  </text-section>
  <text-section subtitle="Music">
    <ul>
      <li>
        <a href="https://open.spotify.com/playlist/7rY2SdqnqlVE0GAk9wSfXL?si=78d5480ab3874a33" target="_blank">
          Current Loops
        </a> - Spotify
      </li>
      <li>
        <a href="https://open.spotify.com/playlist/14YTbXT4toluNRGcXBQzrI?si=ccb1032c9dbb401f" target="_blank">
          Alternative Loops
        </a> - Spotify
      </li>
    </ul>
  </text-section>
  <text-section subtitle="About this page">
    <p>This page is stored in <a href="https://github.com/ldriko/aldrico" target="_blank">GitHub</a></p>
  </text-section>
</template>