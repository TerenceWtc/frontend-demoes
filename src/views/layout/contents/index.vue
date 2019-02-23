<template>
  <div>
    <github-corner/>
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
export default {
  name: 'contents',
  components: {
    'github-corner': GithubCorner
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {

  },
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name : this.$route
    }
  }
}
</script>
