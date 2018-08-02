export default {
  data() {
    return {
      getToday: moment().subtract(0, 'days').format('YYYY-MM-DD'),
      getBeforeDay_7: moment().subtract(7, 'days').format('YYYY-MM-DD'),
      getBeforeDay_30: moment().subtract(30, 'days').format('YYYY-MM-DD'),
      dateValue: [],
    }
  },
  methods: {},
}
