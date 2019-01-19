<template>
  <div class="main-navbar">
    <div class="left-menu">
      <hamburger/>
    </div>
    <div class="middle-menu">
      <breadcrumb/>
    </div>
    <div class="right-menu">
      <welcome/>
      <language/>
      <user-settings/>
    </div>
  </div>
</template>

<script>
import UserSettings from '@/components/UserSettings'
import Hamburger from '@/components/Hamburger'
import Language from '@/components/Language'
import Breadcrumb from '@/components/Breadcrumb'
import Welcome from '@/components/Welcome'
export default {
  name: 'navbar',
  components: {
    'user-settings': UserSettings,
    'hamburger': Hamburger,
    'language': Language,
    'breadcrumb': Breadcrumb,
    'welcome': Welcome
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
