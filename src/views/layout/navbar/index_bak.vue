<template>
  <div>
    <el-menu mode="horizontal">
      <div class="left-menu">
        <el-menu-item index="hamburger">
          <hamburger/>
        </el-menu-item>
      </div>
      <div class="right-menu">
        <el-menu-item index="language">
          <language/>
        </el-menu-item>
        <el-menu-item index="user-settings">
          <user-settings/>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import UserSettings from '@/components/UserSettings'
import Hamburger from '@/components/Hamburger'
import Language from '@/components/Language'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'navbar',
  components: {
    'user-settings': UserSettings,
    'hamburger': Hamburger,
    'language': Language,
    'breadcrumb': Breadcrumb
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/layout/navbar/index.scss';
</style>

<style lang="scss">
.el-menu-item {
  padding: 0px;
}
</style>
