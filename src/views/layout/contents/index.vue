<template>
  <div>
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: 'contents',
  data () {
    return {
    }
  },
  created () {
    console.log(this.$route)
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
