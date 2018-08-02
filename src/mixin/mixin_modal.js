export default {
  data() {
    return {
      modalShow: false,
      modalType: 'add',
      modalParams: {},
      modalWidth: '60%',
      modalMaxTableHeight: 500,
      modalTableInputWidth: '150px'
    }
  },
  methods: {
    modalCheck(o) {
      this.modalParams = o;
      this.modalType = 'check';
      this.modalShow = true
    },
    modalAdd() {
      this.modalType = 'add';
      this.modalShow = true
    },
    modalEdit(o) {
      this.modalParams = o;
      this.modalType = 'edit';
      this.modalShow = true
    },
    modalClose() {
      this.modalParams = {};
      this.modalShow = false;
      this.modalType = 'add'
    },
    modalSubmit() {
      this.modalClose();
      this.searchTable()
    }
  },
}
