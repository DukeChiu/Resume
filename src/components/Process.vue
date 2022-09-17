<template>
    <div style="height: 100%">
      <div>{{name}}</div>
      <div class="long">
        <div :style="{width: percent + '%'}" class="init" style="color: rgb(255,255,255)">
        </div>
      </div>
      <br>
    </div>
</template>

<script>
    export default {
        name: "Process",
        props:{
          name: String,
          percent: Number
        },
      mounted() {
          console.log(this.percent);
      }
    }
</script>

<style scoped>
  .long{
    width: 90%;
    height: 10px;
    background: #cfcfcf;
  }
  .init{
    height: 100%;
    background: cornflowerblue;
  }
  div{
    font-size: 15px;
  }
</style>
