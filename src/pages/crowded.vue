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
const fetchDate = ref(new Date().toLocaleString("ja-JP-u-ca-japanese", { timeZone: 'Asia/Tokyo' }))

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const fetch = () => {
  axios.get("http://18.179.180.74:3000/api/v1/sentos",
  {headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },}
  ).then((res) => {
    messageData.data = res.data.data;
    messageData.isLoaded = true;
    fetchDate.value = new Date().toLocaleString("ja-JP-u-ca-japanese", { timeZone: 'Asia/Tokyo' });
  }).catch((e)=>{
    messageData.error = e;
    messageData.data = [];
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
        <div :class="$style.page_title_left">
          <div>
            <span>混雑状況</span>
          </div>
          <div :class="$style.fetchDate">
            <span>最終更新：</span>
            <span>{{ fetchDate }}</span>
          </div>
        </div>
        <div :class="$style.page_title_right">
          <img src="@/assets/img/legend.png" alt="" />
        </div>
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
  margin: 12px 0;
  padding-left: 4px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.page_title_left {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fetchDate {
  font-size: 10px;
  font-weight: 600;
  color: #757575;
  padding-bottom: 4px;
}

.page_title_right {
  width: calc(60% - 32px);
  height: 80px;
  display: flex;
  align-items: flex-end;
}

.cards {
  display: flex;
  flex-wrap: wrap; /* 折返し指定 */
  gap: 18px;
  justify-content: center;
}

</style>
