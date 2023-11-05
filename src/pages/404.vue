<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <main-layout>
    <div :class="$style.title">
      404 Not Found
    </div>
    <div>
      <a href="/crowded">デモページへ</a>
    </div>
    <div>
      <a href="/">ホームへ</a>
    </div>
  </main-layout>
</template>

<style module>
.title {
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  color: #000;
  padding: 16px;
}
</style>