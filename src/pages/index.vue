<script setup lang="ts">
import { reactive } from "vue";
import { BathesData } from "@/types/api";
import axios from "axios";
import MainLayout from "@/layouts/MainLayout.vue";
import BathCard from "@/components/organisms/BathCard.vue";

const messageData: BathesData = reactive({
  data: [],
  isLoaded: false,
  error: {},
});

axios.get("/msw/index").then((res) => {
  messageData.data = res.data;
  messageData.isLoaded = true;
});
</script>

<template>
  <main-layout>
    <div>
      <div :class="$style.page_title">
        <span>混雑状況</span>
      </div>
      <div :class="$style.cards" v-if="messageData.data.length!==0">
        <div v-for="bath in messageData.data" :key="bath.id">
          <BathCard :bath="bath" />
        </div>
      </div>
      <div v-else>
        <div>
          データの取得に失敗しました
        </div>
      </div>
    </div>
  </main-layout>
</template>

<style module>
.page_title {
  font-size: 24px;
  padding: 12px 0;
}
.cards {
  display: flex;
  flex-wrap: wrap; /* 折返し指定 */
  gap: 12px;
  justify-content: center;
}

</style>
