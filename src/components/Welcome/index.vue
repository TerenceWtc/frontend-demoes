<template>
  <div>
    {{$t('label.welcome')}}! {{userName}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'welcome',
  computed: {
    ...mapGetters(['userName'])
  }
}
</script>
