<template>
  <div id="app">
    <headers></headers>
    <sections></sections>
    <footers :data='foot'></footers>
  </div>
</template>

<script>
  import Headers from '../src/components/Header.vue'
  import Sections from '../src/components/Section.vue'
  import Footers from '../src/components/Footer.vue'
  import navdata from '../src/data/data.json'
  export default {
    name: 'app',
    data () {
      return {
        foot:[
          {tit: '首页', ico: ''},
          {tit: '附近', ico: ''},
          {tit: '逛一逛', ico: ''},
          {tit: '订单', ico: ''},
          {tit: '我的', ico: ''}
        ]
      }
    },
    components: {
      Headers,
      Sections,
      Footers
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
</style>
