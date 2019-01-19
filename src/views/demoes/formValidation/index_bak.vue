<template>
  <div>
    <el-form class="revenueForm" :model="revenueFormData" :inline="true" ref="revenueForm" :rules="revenueRules">
      <el-form-item label="单价" prop="unitPrice">
        <el-input v-model="revenueFormData.unitPrice" class="width_300"/>
      </el-form-item>
      <template v-for="(item, index) in revenueFormData.revenueInfos">
        <span :key="index">
          <br/>
          <el-form-item label="服务人员/产品" :prop="'revenueInfos['+ index +'].revenueType'">
            <el-input v-model="item.revenueType" class="width_300"/>
          </el-form-item>
          <div class="revenueIcon" @click="minusRow(index)">
            <svg-icon :name="`minus`" class="icon"/>
          </div>
        </span>
      </template>
      <div class="revenueIcon" @click="addRow">
        <svg-icon :name="`add`" class="icon"/>
      </div>
      <br/>
    </el-form>
  </div>
</template>

<script>
import '@/icons/svg/add.svg'
import '@/icons/svg/minus.svg'
export default {
  name: '',
  data () {
    return {
      cycleList: [{
        value: '日'
      }, {
        value: '月'
      }, {
        value: '次'
      }],
      revenueFormData: {
        unitPrice: undefined,
        revenueInfos: [{
          revenueType: undefined
        }]
      },
      revenueRules: {
        unitPrice: { required: true, message: '请输入类型', trigger: 'blur' },
        revenueInfos: [{
          revenueType: { required: true, message: '请输入类型', trigger: 'blur' }
        }]
      }
    }
  },
  methods: {
    addRow () {
      this.revenueFormData.revenueInfos.push({
        revenueType: undefined,
        unitPrice: undefined,
        unitQuantity: undefined,
        revenueCycle: undefined
      })
      this.revenueRules.revenueInfos.push({
        revenueType: { required: true, message: '请输入类型', trigger: 'blur' }
      })
    },
    minusRow (index) {
      this.revenueFormData.revenueInfos.splice(index, 1)
    }
  }
}
</script>

<style>
.revenueIcon {
  margin-top: 3px;
  display: inline-block;
}
</style>
