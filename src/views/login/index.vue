<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="80px" label-position="left">
      <h3 class="title">登陆</h3>
      <el-form-item prop="username" label="Username">
        <el-input class="input_w300" name="username" type="text" v-model="loginForm.username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="Password">
        <el-input class="input_w300" name="password" type="password" v-model="loginForm.password" placeholder="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="login">确定</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('password should not less than 6.'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{
          required: true,
          message: 'account is required',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 20,
          message: 'lenth should between 3 to 20',
          trigger: 'blur'
        }],
        password: {
          required: true,
          trigger: 'blur',
          validator: validatePass
        }
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.$router.push({path: '/'})
          }).catch(() => {
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/login/index.scss';
</style>
