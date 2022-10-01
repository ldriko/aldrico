<script setup>
import TextSection from './components/TextSection.vue'
</script>

<template>
  <main class="mx-auto w-auto">
    <text-section image-path="/heaven.png"
                  image-alternative="Heaven"
                  image-class="float-right"
                  title="Heaven Aldrico"
                  title-class="text-3xl">
      <p class="mb-2">Hi&comma; I&rsquo;m Heaven. Loves to code with various languages, learn new technologies and
                      implement them in my daily use. Been a gamer my whole life and won’t be retiring anytime
                      soon. </p>
      <p class="mb-2">I&rsquo;m also trying a new habit to write my thoughts about anything through my writing.</p>
      <p class="mb-2">Currently studying Informatics Engineering at <a href="">UPN &ldquo;Veteran&rdquo; Jawa Timur</a>.
      </p>
    </text-section>
    <text-section title="Writing" title-class="text-xl">
      <ul class="list-none pl-5">
        <li class="italic">Soon</li>
      </ul>
    </text-section>
    <text-section title="Projects" title-class="text-xl">
      <ul class="list-none pl-5">
        <li class="italic"><a href="#">Markdown based blog alike</a> web app</li>
        <li class="italic"><a href="#">Daily cPanel backup</a> web tool</li>
        <li class="italic"><a href="#">Journal publishing</a> web app</li>
        <li><a href="https://github.com/ldriko" target="_blank">GitHub</a> — where all the other magic happens</li>
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
        <li class="mb-3">
          <iframe src="https://open.spotify.com/embed/playlist/14YTbXT4toluNRGcXBQzrI?utm_source=generator&theme=0"
                  width="100%"
                  height="80"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"></iframe>
        </li>
        <li>
          <iframe src="https://open.spotify.com/embed/playlist/7rY2SdqnqlVE0GAk9wSfXL?utm_source=generator&theme=0"
                  width="100%"
                  height="80"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"></iframe>
        </li>
      </ul>
    </text-section>
    <text-section title="About this page">
      <p>This page is stored in <a href="https://github.com/ldriko/aldrico" target="_blank">GitHub</a></p>
    </text-section>
  </main>
</template>