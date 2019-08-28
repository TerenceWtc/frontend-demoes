<template>
  <div class="square-container text-shadow" :class="'color' + value">
    {{value === 0 ? '' : value}}
  </div>
</template>

<script>
export default {
  name: 'square2048',
  props: ['value'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '../../../style/color.scss';
.square-container {
  display: flex;
  margin: 1px;
  height: 75px;
  width: 75px;
  justify-content: center;
  align-items: center;
}
.color {
  &0 {
    background-color: $Ivory;
    // background-color: $Black;
  }
  &2 {
    background-color: $Khaki;
  }
  &4 {
    background-color: $SandyBrown;
  }
  &8 {
    background-color: $Orange;
  }
  &16 {
    background-color: $DarkTurquoise;
  }
  &32 {
    background-color: $CornflowerBlue;
  }
  &64 {
    background-color: $RoyalBlue;
  }
  &128 {
    background-color: $Purple;
  }
  &256 {
    background-color: $MediumSpringGreen;
  }
  &512 {
    background-color: $LimeGreen;
  }
  &1024 {
    background-color: $DarkCyan;
  }
  &2048 {
    background-color: $OliveDrab;
  }
  &4096 {
    background-color: $Violet;
  }
  &8192 {
    background-color: $PaleVioletRed;
  }
  &16384 {
    background-color: $FireBrick;
  }
  &32768 {
    background-color: $Red;
  }
}
.text-shadow{
  color: $White;
  font-size: 20px;
}
</style>
