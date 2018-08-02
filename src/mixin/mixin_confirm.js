export default {
  data() {
    return {
      confirmOps: {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    }
  },
  methods: {
    _comfirm(msg) {
      return this.$confirm(msg, '提示', this.confirmOps)
    },
    _confirmCancle() {
      this.$message({type: 'info', message: '已取消'});
    }
  }
}
