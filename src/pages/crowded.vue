<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { BathesData } from "@/types/api";
import axios from "axios";
import MainLayout from "@/layouts/MainLayout.vue";
import BathCard from "@/components/organisms/BathCard.vue";
import Toggle from '@vueform/toggle';

const messageData: BathesData = reactive({
  data: [],
  isLoaded: false,
  error: {},
});

const interval = ref()
const fetchDate = ref(new Date().toLocaleString("ja-JP-u-ca-japanese", { timeZone: 'Asia/Tokyo' }))
const showMens = ref(true)

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
          <div :class="$style.page_title_content">
            <span>混雑状況</span>
          </div>
          <div :class="$style.fetchDate">
            <span>最終更新：</span>
            <span>{{ fetchDate }}</span>
          </div>
        </div>
        <div :class="$style.page_title_right">
          <div>
            <span :class="$style.ladies">女湯  </span>
            <Toggle v-model="showMens" :class="$style.toggle_blue" />
            <span :class="$style.mens">  男湯</span>
          </div>
          <div>
            <img src="@/assets/img/legend.png" alt="" />
          </div>
        </div>
      </div>
      <div :class="$style.cards" v-if="messageData.data.length!==0">
        <div v-for="bath in messageData.data" :key="bath.id">
          <BathCard :bath="bath" :showMens="showMens"/>
        </div>
      </div>
      <div v-else>
        <div style="color: #000">
          データの取得に失敗しました
        </div>
      </div>
    </div>
  </main-layout>
</template>

<style src="@vueform/toggle/themes/default.css">
</style>

<style module>
.page_title {
  margin: 18px 0;
  padding-left: 4px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.page_title_left {
  font-size: 32px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page_title_content {
  color: #101111;
  font-weight: bold;
}

.fetchDate {
  font-size: 10px;
  font-weight: 600;
  color: #757575;
  padding-bottom: 4px;
}

.page_title_right {
  width: calc(60% - 32px);
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 12px;
  gap: 10px;

  .toggle_blue {
    --toggle-bg-on: rgb(0, 101, 252);
    --toggle-border-on: rgb(0, 101, 252);
    --toggle-bg-off: rgb(255, 44, 44);
    --toggle-border-off: rgb(255, 44, 44);
  }
}

.mens {
  font-size: 16px;
  color: rgb(0, 101, 252);
}

.ladies {
  font-size: 16px;
  color: rgb(255, 44, 44);
}

.cards {
  display: flex;
  flex-wrap: wrap; /* 折返し指定 */
  gap: 18px;
  justify-content: center;
}


</style>
