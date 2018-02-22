<template>
  <footer>
      <dl v-for="(item, ind) in data" :key="ind">
        <dt></dt>
        <dd>{{item.tit}}</dd>
      </dl>
  </footer>
</template>

<script>
export default {
  props:['data']
}
</script>

<style scoped>
    footer{
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-shrink: 0;
    }
</style>
