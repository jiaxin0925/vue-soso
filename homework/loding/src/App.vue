<template>
  <div id="app">
    <headers></headers>
    <mains></mains>
  </div>
</template>

<script>
import Headers from './components/Header'
import Mains from './components/Main'
export default {
  name: 'app',
  components:{
    Headers,
    Mains
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
