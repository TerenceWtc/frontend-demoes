<template>
  <div class="layout-container">
    <el-container>
      <el-header>
        <navbar class="navbar-container"/>
      </el-header>
      <el-container>
        <el-aside width="260px">
          <sidebar class="sidebar-container"/>
        </el-aside>
        <el-main>
          <contents class="contents-container"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/views/layout/navbar/index'
import Sidebar from '@/views/layout/sidebar/index'
import Contents from '@/views/layout/contents/index'
export default {
  name: 'layout',
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar,
    'contents': Contents
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/layout/index.scss';
</style>
