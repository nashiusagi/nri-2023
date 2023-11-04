<template>
  <div :class="$style.headerWrapper">
    <div :class="$style.logo">
      <img src="@/assets/img/logo.png" alt="logo"/>
    </div>
    <div :class="$style.title">
      Today Foolish! 
    </div>
    <div></div>
  </div>
</template>

<style module>
.headerWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 45px;
  height: 45px;
}

.title {
  color: #111;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -14px;
  right: 0;
  margin: auto;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Caveat', cursive;
}
</style>
