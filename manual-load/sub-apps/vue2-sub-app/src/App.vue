<template>
  <div id="app">
    <h2>Vue2 子应用</h2>
    <button @click="onClick" style="width: 100px;">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      count: 0
    }
  },
  components: {},
  methods: {
    onClick: function () {
      console.log('this.count', this.count)
      this.count++
    }
  }
}
</script>

<style>
h2 {
  text-align: center;
}
</style>
