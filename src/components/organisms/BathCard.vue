<script setup lang="ts">
import { Bath } from "@/types/api";

const props = defineProps<{
  bath: Bath;
}>();

const getColor = (status: number) => {
  if (status === 1) return "#03ca03";
  if (status===2) return "#e1d038";
  return "#c92424"
}

const color = getColor(props.bath.mens_congestion_degree) 
</script>

<template>
  <div class="fastest_card" v-if="bath.is_fastest">
    <div class="reflection">
      <img :src="bath.imageUrl" class="image" alt=""/>
    </div>
    <div>
      <a class="post_link" :href="bath.siteUrl" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
    </div>
    <div :class="$style.explanation">
      {{ bath.introductionText }}
    </div>
  </div>
  <div class="card" v-else>
    <div>
      <img :src="bath.imageUrl" class="image" alt=""/>
    </div>
    <div>
      <a class="post_link" :href="bath.siteUrl" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
    </div>
    <div :class="$style.explanation">
      {{ bath.introductionText }}
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

.fastest_card {
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

.reflection{
  display:inline-block;
  position:relative;
  overflow:hidden;
}
 
.reflection:after {
  content:"";
  height:100%;
  width:30px;
  position:absolute;
  background-color: #faf1f179;
  -webkit-transform: rotate(45deg);
  -webkit-animation: reflection 2s ease-in-out infinite;
}
 
@keyframes reflection {
  0% { -webkit-transform: scale(0) rotate(45deg); opacity: 0; }
  80% { -webkit-transform: scale(0) rotate(45deg); opacity: 0.5; }
  81% { -webkit-transform: scale(4) rotate(45deg); opacity: 1; }
  100% { -webkit-transform: scale(50) rotate(45deg); opacity: 0; }
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
