<template>
  <div>
    <el-menu mode="vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="routerTrue">
      <el-menu-item v-for="item in menus" :index="'/' + item.code" :key="item.code">
        <span slot="title">{{$t('label.' + item.title)}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  data () {
    return {
      routerTrue: true
    }
  },
  created () {
  },
  computed: {
    ...mapGetters([
      'menus'
    ])
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/layout/sidebar/index.scss';
</style>
