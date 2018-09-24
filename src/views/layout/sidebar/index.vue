<template>
  <div>
    <el-menu mode="vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
      <el-menu-item index="1">
        <span slot="title">导航1</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">导航2</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sidebar'

}
</script>

<style lang="scss" scoped>
@import '../../../style/layout/sidebar/index.scss';
</style>
