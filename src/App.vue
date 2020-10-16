<template>
  <div>
    APP
    <el-button type='success' @click="alert">点击</el-button>
  </div>
</template>

<script>
export default {
  name: 'APP',
  methods:{
    alert(){
      this.$message.success('这是一条消息提示');
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>

</style>
