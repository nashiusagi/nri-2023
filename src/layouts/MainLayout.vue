<script setup lang="ts">
import TheHeader from "@/components/organisms/TheHeader.vue";
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.header">
        <TheHeader />
    </div>
    <div :class="$style.main">
      <slot />
    </div>
    <footer  :class="$style.footer"></footer>
  </div>
</template>

<style module>

.container{
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
}
.header {
  width: 100%;
  height: 45px;
  background-color: #ffffff;
  position: fixed;
  overflow: hidden;
  z-index: 100;
  position: sticky;
  border-bottom: 1px solid #0066ffbd;
}

.main {
  padding: 12px 16px;
}

.footer {
  padding: 50px 0;
  background-color: #0094ff;
  bottom: 0;
}

</style>
