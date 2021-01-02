<template>
  <div id="app">
    <h2>Welcome to my test</h2>
    <button @click='show = true'>Show</button>
    <p v-if='show'>Hello TestCafe!</p>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
