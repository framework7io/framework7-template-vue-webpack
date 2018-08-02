export default {
  data() {
    return {
      dataList: [],
      dataLoading: false,
      csvDataList: [],
      rowSelection: [],
      delSelection: []
    }
  },
  methods: {
    selectionChange(val) {
      this.rowSelection = val;
      this.delSelection = val
    },
    rowEdit() {

    },
    submitEdit() {

    },
    cancelEdit() {

    },
    delRow() {

    },
    selectChange(val) {

    }
  },
}
