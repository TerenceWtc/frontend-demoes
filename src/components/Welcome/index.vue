<template>
  <div>
    {{$t('label.welcome')}}! {{username}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'welcome',
  computed: {
    ...mapGetters(['username'])
  }
}
</script>
