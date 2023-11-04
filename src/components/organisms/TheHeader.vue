<template>
  <div :class="$style.headerWrapper">
    <div :class="$style.logo">
      <img src="@/assets/img/logo.png" alt="logo"/>
    </div>
    <div :class="$style.title">
      目指せ一番風呂★
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
  font-size: 32px;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
