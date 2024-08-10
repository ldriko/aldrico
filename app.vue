<script lang="ts" setup>
useHead({
    titleTemplate: (value) =>
        value ? `${value} - Heaven Aldrico` : "Heaven Aldrico",
});
</script>

<template>
    <NuxtPage />
</template>

<style>
:root {
    @apply font-serif;
}

a {
    @apply text-blue-700;
    @apply hover:text-blue-800;
    @apply hover:underline;
}
</style>
