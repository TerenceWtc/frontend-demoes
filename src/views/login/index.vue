<template>
  <div class="login-container">
    <el-tabs v-model="active" :stretch="stretch">
      <el-tab-pane :label="$t('label.login')" name="login">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="80px" label-position="left">
          <el-form-item prop="username" :label="$t('label.username')">
            <el-input class="input_w300" type="text" v-model="loginForm.username" :placeholder="$t('placeholder.username')"></el-input>
          </el-form-item>
          <el-form-item prop="password" :label="$t('label.password')">
            <el-input class="input_w300" type="password" v-model="loginForm.password" :placeholder="$t('placeholder.password')"></el-input>
          </el-form-item>
            <el-button class="margin_top_10" type="primary" @click="login">{{$t('button.login')}}</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane :label="$t('label.register')" name="register">
        <el-form :model="registerForm" :rules="registerRules" ref="registerForm" label-width="80px" label-position="left">
          <el-form-item prop="username" :label="$t('label.username')">
            <el-input class="input_w300" type="text" v-model="registerForm.username" :placeholder="$t('placeholder.username')"></el-input>
          </el-form-item>
          <el-form-item prop="password" :label="$t('label.password')">
            <el-input class="input_w300" type="password" v-model="registerForm.password" :placeholder="$t('placeholder.password')"></el-input>
          </el-form-item>
          <el-form-item prop="confirmPass" :label="$t('label.confirmPass')">
            <el-input class="input_w300" type="text" v-model="registerForm.confirmPass" :placeholder="$t('placeholder.confirmPass')"></el-input>
          </el-form-item>
          <el-form-item prop="email" :label="$t('label.email')">
            <el-input class="input_w300" type="text" v-model="registerForm.email" :placeholder="$t('placeholder.email')"></el-input>
          </el-form-item>
          <el-button class="margin_top_10" type="primary" @click="register">{{$t('button.register')}}</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error(this.$t('regex.lengthGTE6')))
      } else {
        callback()
      }
    }
    return {
      active: 'login',
      stretch: true,
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{
          required: true,
          message: this.$t('regex.username'),
          trigger: 'blur'
        },
        {
          min: 4,
          max: 20,
          message: this.$t('regex.length4to20'),
          trigger: 'blur'
        }],
        password: {
          required: true,
          trigger: 'blur',
          validator: validatePass
        }
      },
      registerForm: {
        username: undefined,
        password: undefined,
        confimPass: undefined,
        email: undefined
      },
      registerRules: {
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
    },
    register () {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/login/index.scss';
</style>
