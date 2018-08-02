export default {
  data() {
    return {
      pageNum: 1,
      pageSizes: [10, 20, 30, 40],
      pageSize: 10,
      pageTotal: 0,
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.searchTable()
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.searchTable()
    },
  },
}
