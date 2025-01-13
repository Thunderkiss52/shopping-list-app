<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {computed} from "vue";

const route = useRoute();
const currentRouteName = computed(() => route.name)

</script>

<style scoped>

</style>