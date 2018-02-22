<template>
  <div id="app">
    <header>
      <span>选择车型</span><span>…</span>
    </header>
    <section>
      <ul class="nav">
        <router-link
        tag='li'
        v-for="(item, ind) in navData"
        :key="ind"
        :to='item.to'>
          {{item.tit}}
        </router-link>
      </ul>
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navData: [
        {tit: '全部', to: '/'},
        {tit: '商务型', to: '/xing'},
        {tit: '豪华', to: '/zimu'}
      ]
    }
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
header{
  width: 100%;
  height: 1rem;
  background: orange;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
  flex-shrink: 0;
}
section{
  flex: 1;
  overflow-y: auto;
}
section .top, section .nav {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
section .top{
  padding: 0 0.2rem;
}
section .top input{
  flex: 1;
  margin: 0 0.2rem;
  border: none;
  outline: none;
  background: 0;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  font-size: 0.35rem;
  padding: 0.1rem 0.2rem;
}
section .nav li {
  flex: 1;
  height: 100%;
  line-height: 1rem;
  margin-top: 2px;
  text-align: center;
}
</style>
