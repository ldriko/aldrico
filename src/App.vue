<script setup>
import TextSection from './components/TextSection.vue'
</script>

<template>
  <main class="m-auto">
    <text-section image-path="/heaven.webp"
                  image-src-set="/heaven.webp 1x, /heaven.webp 2x, /heaven.webp 3x, /heaven.webp 4x"
                  image-alternative="Heaven"
                  image-class="float-right my-5"
                  image-width="176"
                  image-height="233"
                  title="Heaven Aldrico"
                  title-class="text-3xl mt-5">
      <p class="my-5">Hi&comma; I&rsquo;m Heaven. Loves to code with various languages, learn new technologies and
                      implement them in my daily use. Been a gamer my whole life and won’t be retiring anytime
                      soon. </p>
      <p class="my-5">I&rsquo;m also trying a new habit to write my thoughts about anything through my writing.</p>
      <p class="my-5">
        Currently studying Informatics Engineering at
        <a href="https://www.upnjatim.ac.id/" target="_blank">UPN &ldquo;Veteran&rdquo; Jawa Timur</a>.
      </p>
    </text-section>
    <text-section title="Writing" title-class="text-xl">
      <ul class="list-none pl-5">
        <li class="italic">Soon</li>
      </ul>
    </text-section>
    <text-section title="Projects" title-class="text-xl">
      <ul class="list-none pl-5">
        <li class="italic"><a href="#">Markdown based blog alike</a> Web App</li>
        <li class="italic"><a href="#">Daily cPanel backup</a> Web Tool</li>
        <li class="italic"><a href="#">Journal publishing</a> Web App</li>
        <li><a href="https://github.com/ldriko" target="_blank">GitHub</a> — Where all the other magic happens</li>
      </ul>
    </text-section>
    <text-section title="Achievements" title-class="text-xl">
      <ul class="list-none pl-5">
        <li><a href="#">1st place Digital Magazine</a> by Mapion IT</li>
        <li><a href="#">1st place LKS Wilker</a> by the Indonesia's Ministry of Education</li>
        <li><a href="#">3rd place LKS Provinsi</a> by the Indonesia's Ministry of Education</li>
      </ul>
    </text-section>
    <text-section title="Social" title-class="text-xl">
      <ul class="list-none pl-5">
        <li><a href="https://twitter.com/ldriko" target="_blank">Twitter</a></li>
        <li><a href="https://github.com/ldriko" target="_blank">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/heaven-aldrico-28489620a" target="_blank">LinkedIn</a></li>
        <li><a href="https://stackoverflow.com/users/11387759/heaven-aldrico" target="_blank">StackOverflow</a></li>
        <li><a href="https://www.instagram.com/heaven_aldrico/" target="_blank">Instagram</a></li>
        <li><a class="text-black" href="mailto:4d3.h34v3n@gmail.com">4d3.h34v3n@gmail.com</a></li>
      </ul>
    </text-section>
    <text-section title="Music" title-class="text-xl">
      <ul class="list-none pl-5">
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
    <text-section title="About this page">
      <p>This page is stored in <a href="https://github.com/ldriko/aldrico" target="_blank">GitHub</a></p>
    </text-section>
  </main>
</template>