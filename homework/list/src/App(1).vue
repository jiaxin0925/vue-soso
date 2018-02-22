<template>
  <div id="app">
    <section>
      <router-view/>
    </section>
    <footer>
      <router-link
      v-for="(item, ind) in footData"
      :key="ind"
      :to='item.to'
      tag='dl'>
        {{item.tit}}
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      footData: null
    }
  },
  mounted () {
    this.$http('/api/footData')
    .then((res) => {
      this.footData = res.data
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
section{
  flex: 1;
  overflow-y: auto;
}
footer{
  width: 100%;
  height: 1rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #ccc;
}
footer dl {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}
</style>
