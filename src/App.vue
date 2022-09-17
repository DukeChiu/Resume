<template>
  <div id="app">
    <router-view name="Header"></router-view>
    <router-view name="Details"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  display: inline-flex;
  width: 100%;
  background: #ffffff;
  height: 100%;
  /*padding-bottom: 10px;*/
}

@media screen and (max-device-width: 1240px) {
  #app{
    width: 100%;
    zoom: 0.5;
  }
}
  @media screen and (max-device-width: 600px){
    #app{
      overflow: hidden;
      /*padding-bottom: 20px;*/
    }
  }
</style>
