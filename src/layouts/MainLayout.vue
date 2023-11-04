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
      <div :class="$style.bubble_container">
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
      </div>
    </div>
    <footer :class="$style.footer"></footer>
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
  border-bottom: 2px solid #0066ffbd;
}

.main {
  padding: 12px 16px;
  background-color: #6cc2ff;
}

.footer {
  padding: 50px 0;
  background-color: #0094ff;
  bottom: 0;
}

</style>

<style scoped>
/* KEYFRAMES */

@-webkit-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -40px;
  }
}

@-moz-keyframes animateBubble {
  0% {
    margin-top: 500px;
  }
  100% {
    margin-top: -40px;
  }
}

@keyframes animateBubble {
  0% {
    margin-top: 500px;
  }
  100% {
    margin-top: -40px;
  }
}

@-webkit-keyframes sideWays { 
  0% { 
    margin-left:0px;
  }
  100% { 
    margin-left:50px;
  }
}

@-moz-keyframes sideWays { 
  0% { 
    margin-left:0px;
  }
  100% { 
    margin-left:50px;
  }
}

@keyframes sideWays { 
  0% { 
    margin-left:0px;
  }
  100% { 
    margin-left:50px;
  }
}

/* ANIMATIONS */
.x2 {
  -webkit-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
	-moz-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
	animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
  -webkit-backface-visibility: hidden;
	
	left: 45%;
	top: 50%;
	
	-webkit-transform: scale(0.4);
	-moz-transform: scale(0.4);
	transform: scale(0.4);
}

.x3 {
  -webkit-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
  -webkit-backface-visibility: hidden;

	left: 10%;
	top: 40%;
	
	-webkit-transform: scale(0.7);
	-moz-transform: scale(0.7);
	transform: scale(0.7);
}

.x4 {
  -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	-moz-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
	animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
  -webkit-backface-visibility: hidden;
	
	left: 0%;
	top: 20%;
	
	-webkit-transform: scale(0.6);
	-moz-transform: scale(0.6);
	transform: scale(0.6);
}

.x5 {
  -webkit-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
  -webkit-backface-visibility: hidden;
	
	left: 50%;
	top: 60%;
	
	-webkit-transform: scale(0.3);
	-moz-transform: scale(0.3);
	transform: scale(0.3);
}

/* OBJECTS */

.bubble {
  -webkit-border-radius: 50%;
	-moz-border-radius: 50%;
  -webkit-backface-visibility: hidden;
	border-radius: 50%;
	
  -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	-moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	
  height: 200px;
	position: absolute;
	width: 200px;
}

.bubble:after {
  background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%); /* FF3.6+ */
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0.5)), color-stop(70%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Opera 12+ */
  background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* IE10+ */
  background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* W3C */

	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
  -webkit-backface-visibility: hidden;
	border-radius: 50%;
	
  -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	-moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	
	content: "";
  height: 180px;
	left: 10px;
	position: absolute;
	width: 180px;
  z-index: -1000;
}
</style>