<script setup lang="ts">
import { Bath } from "@/types/api";

const calcCrowdedStatus = (num: number) => {
  if(num===0){ 
    return 0
  }
  if(num>5){
    return 1
  }if (num>10){ 
    return 2
  } 
    return 3
  
}

const props = defineProps<{
  bath: Bath;
}>();

const getColor = (status: number) => {
  if (status === 1) return "#03ca03";
  if (status===2) return "#e1d038";
  return "#c92424"
}

const ichiban = props.bath.is_fastest
const color = getColor(calcCrowdedStatus(props.bath.numUsers)) 
</script>

<template>
  <div class="ichiban_card" v-if="ichiban">
    <div>
      <img :src="bath.imageUrl" class="image" alt=""/>
    </div>
    <div>
      <a class="post_link" :href="bath.link" target="_blank" rel="noopener noreferrer">{{ bath.title }}</a>
    </div>
    <div :class="$style.explanation">
      {{ bath.body }}
    </div>
  </div>
  <div class="card" v-else>
    <div>
      <img :src="bath.imageUrl" class="image" alt=""/>
    </div>
    <div>
      <a class="post_link" :href="bath.link" target="_blank" rel="noopener noreferrer">{{ bath.title }}</a>
    </div>
    <div :class="$style.explanation">
      {{ bath.body }}
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 150px;
  height: 150px;
  cursor: pointer;
  border: solid 2px v-bind(color);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  padding: 4px 8px;
}

.ichiban_card {
  width: 150px;
  height: 150px;
  cursor: pointer;
  box-sizing: border-box;
  border: 8px solid;
  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
  animation: 2s rotate linear infinite;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  padding: 4px 8px;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.image {
  vertical-align: top;
  width: 120px;  
  height: 90px;
}

.post_link {
  color: #000;
  font-size: 16px;
  display: block;
  height: 100%;
  line-height: 100%;
}

</style>
<style module>
.explanation {
  color: #707070;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
