<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { BathesData } from "@/types/api";
import axios from "axios";
import MainLayout from "@/layouts/MainLayout.vue";
import BathCard from "@/components/organisms/BathCard.vue";

const messageData: BathesData = reactive({
  data: [],
  isLoaded: false,
  error: {},
});

const interval = ref()

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const fetch = () => {
  axios.get("http://18.179.180.74:3000/api/v1/sentos",
  {headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },}
  ).then((res) => {
    messageData.data = res.data.data;
    messageData.isLoaded = true;
  }).catch((e)=>{
    messageData.error = e;
  });
}

onMounted(() => {
  interval.value = setInterval(() => {
  fetch()
    }, 5000);
})

onBeforeUnmount(()=>{
  if(interval.value){
    clearInterval(interval.value)
  }
})

fetch();

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
