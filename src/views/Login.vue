<template>
  <div class="Login-form-mask">
    <el-form class="Login-form"></el-form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Login-form-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
}
.Login-form {
  width: 420px;
  border-radius: 8px;
  box-shadow: 0 0 6px rgb(0 0 0 / 10%);
  padding: 25px 45px 40px;
  box-sizing: border-box;
  position: relative;
}
</style>
