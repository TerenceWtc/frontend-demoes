<template>
  <div class="top-container">
    <div>
      <el-button @click="addHandler">add</el-button>
      <el-button @click="detailHandler">detail</el-button>
      <el-button @click="updateHandler">update</el-button>
      <el-button @click="deleteHandler">delete</el-button>
    </div>
    <div>
      <el-input placeholder="请输入内容" v-model="search">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: undefined
    }
  },
  methods: {
    addHandler () {
      this.$parent.addHandler()
    },
    detailHandler () {
      this.$parent.detailHandler()
    },
    updateHandler () {
      this.$parent.updateHandler()
    },
    deleteHandler () {
      this.$parent.deleteHandler()
    }
  }
}
</script>

<style>

</style>
