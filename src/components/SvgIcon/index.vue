<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svgIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.name}`
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 20px;
  height: 20px;
}
</style>
