<template>
    <div>
        <NuxtPage />
    </div>
</template>

<script setup>
const route = useRoute();

useHead({
    title: `dpetrovych - ${route.meta.title}`
})
</script>

