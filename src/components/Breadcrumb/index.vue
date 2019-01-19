<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
      breadcrumbList: undefined
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(breadcrumb => breadcrumb.name)
      const home = matched[0]
      if (home && home.name.trim().toLocaleLowerCase() !== 'layout'.toLocaleLowerCase()) {
        matched = [{path: '/layout'}].concat(matched)
      }
      this.breadcrumbList = matched
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>
