export default {
  data() {
    return {}
  },
  methods: {
    _uploadPath(response) {
      if (response.state === 0) {
        return response.aaData.path
      } else {
        return ''
      }
    },
  },
}
