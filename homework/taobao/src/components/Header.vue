<template>
  <header>
      <span>北京</span>
      <form action="">
          <input type="text" placeholder="铁木真">
      </form>
      <span>扫码</span>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
   header{
       width: 100%;
       height: 1rem;
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 0.2rem;
       background: skyblue;
       flex-shrink: 0;
   }
   header span{
       color: #fff;
   }
   header form {
       flex: 1;
       height: 100%;
       background: #fff;
       border-radius: 0.5rem;
       margin: 0 0.2rem;
   }
   header form input {
       width: 100%;
       height: 100%;
       padding: 0 0.2rem;
       border: none;
       outline: none;
       background: 0;
   }
</style>
