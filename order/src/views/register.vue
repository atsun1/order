<template>
  <div class="login">
    <div class="login-box">

        <van-form @submit="onSubmit" class="login-from">
          <van-field
            v-model="eamil"
            name="eamil"
            label="邮箱"
            placeholder="请输入邮箱"
            :rules="[{ required: true, message: '请输入邮箱' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="chekepass"
            type="password"
            name="chekepass"
            label="确认密码"
            placeholder="请输入确认密码"
            :rules="[{ required: true, message: '请填写确认密码' }]"
          />

          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">注册</van-button>
          </div>
        </van-form>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        eamil: '',
        password: '',
        chekepass:''
      };
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
      },
    },
  };
</script>

<style>
  .login{
    display: flex;
    height:calc(100vh - 70px);
    justify-content: center;
    align-items: center;
  }
  .login-box{
    width: 400px;
    height:300px;
    border:1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-from{
    width: 100%;
  }
</style>
