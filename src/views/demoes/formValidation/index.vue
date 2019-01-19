<template>
  <div>
    <el-form class="validationForm" :model="validationFormData" :inline="true" ref="validationForm" :rules="valudationRules">
      <el-form-item :label="$t('label.name')" prop="name">
        <el-input v-model="validationFormData.name" class="width_300"/>
      </el-form-item>
      <el-form-item :label="$t('label.age')" prop="age">
        <el-input v-model="validationFormData.age" class="width_300"/>
      </el-form-item>
      <el-form-item :label="$t('label.gender')" prop="gender">
        <el-select v-model="validationFormData.gender" filterable clearable :placeholder="$t('placeholder.gender')">
          <el-option
            v-for="item in genderList"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <span v-for="(item, index) in validationFormData.accountInfos" :key="index">
        <br/>
        <el-form-item label="website" :prop="'accountInfos['+ index +'].website'">
          <el-input v-model="item.website" class="width_300"/>
        </el-form-item>
        <el-form-item label="username" :prop="'accountInfos['+ index +'].username'">
          <el-input v-model="item.username" class="width_300"/>
        </el-form-item>
        <el-form-item label="password" :prop="'accountInfos['+ index +'].password'">
          <el-input v-model="item.password" class="width_300"/>
        </el-form-item>
        <div class="thisIcon" @click="minusRow(index)">
          <svg-icon :name="`minus`" class="icon"/>
        </div>
      </span>
      <div class="thisIcon" @click="addRow">
        <svg-icon :name="`add`" class="icon"/>
      </div>
      <br/>
      <el-form-item>
        <el-button @click="submit">confirm</el-button>
      </el-form-item>
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
      genderList: [{
        label: this.$t('label.male'),
        value: 0
      },
      {
        label: this.$t('label.female'),
        value: 1
      }],
      validationFormData: {
        name: undefined,
        age: undefined,
        gender: undefined,
        accountInfos: [{
          website: undefined,
          username: undefined,
          password: undefined
        }]
      },
      valudationRules: {
        name: { required: true, message: '请输入类型', trigger: 'blur' },
        age: { required: true, message: '请输入类型', trigger: 'blur' },
        gender: { required: true, message: '请输入类型', trigger: 'blur' },
        accountInfos: [{
          website: { required: true, message: '请输入类型', trigger: 'blur' },
          username: { required: true, message: '请输入类型', trigger: 'blur' },
          password: { required: true, message: '请输入类型', trigger: 'blur' }
        }]
      }
    }
  },
  methods: {
    addRow () {
      this.validationFormData.accountInfos.push({
        website: undefined,
        username: undefined,
        password: undefined
      })
      this.valudationRules.accountInfos.push({
        website: { required: true, message: '请输入类型', trigger: 'blur' },
        username: { required: true, message: '请输入类型', trigger: 'blur' },
        password: { required: true, message: '请输入类型', trigger: 'blur' }
      })
    },
    minusRow (index) {
      this.validationFormData.accountInfos.splice(index, 1)
      this.$refs['validationForm'].validate()
    },
    submit () {
      this.$refs['validationForm'].validate((valid) => {
        if (valid) {
        }
      })
    }
  }
}
</script>

<style>
.thisIcon {
  margin-top: 3px;
  display: inline-block;
}
</style>
