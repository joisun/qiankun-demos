<template>
  <h2>Vue3 子应用</h2>
  <button @click="onClick" style="width: 100px;">{{count}}</button>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const onClick  = function (){
  count.value++
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
