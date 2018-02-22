<template>
  <div class="main">
      <form action="">
          <input type="text" placeholder="邮箱地址">
          <input type="password" placeholder="密码">
          <input type="password" placeholder="确认密码">
          <p class="line"><span>联系手机</span></p>
          <p>
            <select name="" id="">
                <option value="">+86</option>
            </select>
            <input type="phone" placeholder="手机号码">
          </p>
          <p>
            <input type="text" placeholder="验证码">
            <button>获取验证码</button>
          </p>
          <input type="submit" id="submit" value="同意协议并提交">
          <p class="line"><span>《腾讯服务协议》</span></p>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .main{
       width: 100%; 
    }
    .main form {
        width: 300px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
    button, input{
        border: none;
        outline: none;
        background: 0;
    }
    form input {
        width: 100%;
        border: 1px solid #ccc;
        padding: 5px;
        margin-top: 10px; 
        border-radius: 5px;
    }
    p {
        width: 100%;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    p input{
        margin: 0;
        height: 100%;
    }
    p select{
        height: 150%;
        padding: 0 10px;
        margin: 0;
        border-right: 1px solid #ccc;
    }
    p button{
        height: 150%;
        width: 45%;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #e9e9e9;
    }
    #submit{
        color: #fff;
        padding: 10px;
        background: #0a7cca;
    }
    .line{
        height: 0;
        border-bottom: 1px solid #ccc;
        position: relative; 
    }
    .line span{
        position: absolute;
        color: #999;
        left: 50%;
        top: -50%;
        transform: translate(-50%, -50%);
        background: #fff;
        font-size: 12px;
        padding: 0 10px;
    }
    .line:last-child span{
        color: skyblue;
    }
</style>
