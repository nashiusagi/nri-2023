<script setup lang="ts">
import { Bath } from "@/types/api";

defineProps<{
  bath: Bath;
  showMens: boolean;
}>();
</script>

<template>
  <div v-if="showMens">
    <div class="card closed_card" v-if="!bath.is_opened">
      <div class="masked">
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="closed_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div class="closed">
        閉館中 
      </div>
    </div>
    <div class="card fastest_card" v-else-if="bath.is_mens_fastest">
      <div class="reflection">
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="post_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div :class="$style.explanation">
        {{ bath.introduction_text }}
      </div>
    </div>
    <div class="card card_g" v-else-if="bath.mens_congestion_degree===0">
      <div class="reflection">
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="post_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div :class="$style.explanation">
        {{ bath.introduction_text }}
      </div>
    </div>
    <div class="card card_y" v-else-if="bath.mens_congestion_degree==1">
      <div>
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="post_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div :class="$style.explanation">
        {{ bath.introduction_text }}
      </div>
    </div>
    <div class="card card_r" v-else>
      <div>
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="post_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div :class="$style.explanation">
        {{ bath.introduction_text }}
      </div>
    </div>
  </div>
  <div v-else>
    <div class="card closed_card" v-if="!bath.is_opened">
      <div class="masked">
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="closed_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div class="closed">
        閉館中 
      </div>
    </div>
    <div class="card fastest_card" v-else-if="bath.is_ladies_fastest">
      <div class="reflection">
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="post_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div :class="$style.explanation">
        {{ bath.introduction_text }}
      </div>
    </div>
    <div class="card card_g" v-else-if="bath.ladies_congestion_degree===0">
      <div class="reflection">
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="post_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div :class="$style.explanation">
        {{ bath.introduction_text }}
      </div>
    </div>
    <div class="card card_y" v-else-if="bath.ladies_congestion_degree==1">
      <div>
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="post_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div :class="$style.explanation">
        {{ bath.introduction_text }}
      </div>
    </div>
    <div class="card card_r" v-else>
      <div>
        <img :src="bath.image_url" class="image" alt=""/>
      </div>
      <div class="name">
        <a class="post_link" :href="bath.site_url" target="_blank" rel="noopener noreferrer">{{ bath.name }}</a>
      </div>
      <div :class="$style.explanation">
        {{ bath.introduction_text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 150px;
  height: 200px;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  padding: 4px 10px;
  border-radius: 13px;
  background-color: #ffffff;
  position: relative;

  img {
    text-align: center;
  }
}

.closed_card {
  border: 6px solid #212121;
  background-color: rgba(0,0,0,0.6);

}

.masked {
  width: 120px;
  height: 90px;
  opacity: 0.6;
  display:inline-block;
  justify-content: center;
}

.closed {
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  padding-top: 2px;
  padding-right: 4px;
  transform: rotate(-10deg);
  font-family: 'Shippori Mincho B1', serif;
}

.name {
  height: 32px;
}

.card_g {
  border: solid 6px #03ca03;
  box-shadow: 8px 5px 3px #1c4b00cc;
}
.card_y {
  border: solid 6px #e1d038;
}
.card_r {
  border: solid 6px #c92424;
}

.fastest_card {
  border: 8px solid;
  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
  animation: 1s rotate linear infinite;
  -webkit-backface-visibility: hidden;
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

.closed_link {
  margin-top: -4.5px;
  color: #fcf2f2 !important;
  height: calc( 100% + 4px );
}

.card a {
  font-size: 16px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 100px);
  padding-top: 100px;
}

.reflection{
  display:inline-block;
  position:relative;
  overflow:hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform;
}

.reflection:after {
  content:"";
  height:100%;
  width:30px;
  position:absolute;
  background-color: #faf1f179;
  -webkit-transform: rotate(45deg);
  -webkit-animation: reflection 2s ease-in-out infinite;
  -webkit-backface-visibility: hidden;
  will-change: transform;
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
  color: #404040;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
