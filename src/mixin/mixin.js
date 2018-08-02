import co from 'co'
import WPAPI from 'wpapi'
import configs from '../configs.js'

//ajax
function* $ajax(url, type, param, async, loading, jsonType, arr, valiToken) {
  let contentType = jsonType ? 'application/json' : 'application/x-www-form-urlencoded; charset=UTF-8';
  let token = local.get('token');
  for (var key in param) {
    if (typeof param[key] === 'string') {
      param[key] = $.trim(param[key].replace(/<\/?[^>]*>/g, ''))
    }
  }
  if (valiToken && !token) {
    this.$message({type: 'error', message: "token过期请重新登录"});
    this.$router.push({name: 'login'})
  } else if (valiToken) {
    param.token = token
  }
  let o = {
    url: url,
    type: type,
    data: param,
    async: async,
    contentType: contentType
  };
  let data = {};
  if (arr) {
    o.traditional = true
  }
  if (loading) {
    this[loading] = true
  }

  data = yield $.ajax(o)
    .then((function (d) {
      if (loading) {
        this[loading] = false
      }
      if (d.state !== 0) {
        if (d.state == 97 || d.state == 98) {
          this.$message({type: 'error', message: d.msg});
          this.$router.push({name: 'login'})
        } else {
          this.$message({type: 'error', message: d.msg});
          // this.$router.push({ name: 'page500' ,query:{error:d.readyState}})
          console.error(d.msg);
          if (typeof d.aaData === 'undefined' || d.aaData === null) {
            d.aaData = []
          }
          return d
        }
      } else if (typeof d.aaData === 'undefined' || d.aaData === null) {
        d.aaData = [];
        return d
      } else {
        return d
      }
    }).bind(this))
    .fail((function (d) {
      if (loading) {
        this[loading] = false
      }
      if (d.readyState === 4 && d.status === 404) {
        this.$router.push({name: 'page404', query: {error: d.readyState}})
      } else if (d.status === 403) {
        this.$router.push({name: 'page403'})
      } else if ((d.status + '').indexOf('50') === 0) {
        this.$router.push({name: 'page500', query: {error: d.readyState}})
      } else {
        this.$message({type: 'error', message: '接口异常'});
      }
    }).bind(this));
  return yield new Promise((function (resolve, reject) {
    resolve(data)
  }).bind(this))
}

export default {
  data() {
    return {
      currWebsite: undefined,
      currWebsiteApi: undefined,
    };
  },
  beforeMount() {
    this.initWpApi();
  },
  methods: {
    initWpApi() {
      if (undefined == this.currWebsite) {
        this.currWebsite = configs.default_website;
      }
      const _this = this;
      configs.websites.forEach(function (website) {
        for (const name in website) {
          if (name == _this.currWebsite) {
            _this.currWebsiteApi = new WPAPI({endpoint: website[name]});
          }
        }
      });
    },
    _ajax({
            url = this.rootAPI,
            type = 'POST',
            name = '',
            param = {},
            async = true,
            loading = '',
            jsonType = false,
            arr = false,
            valiToken = true
          } = {}) {
      if ((url === this.rootAPI || url === this.userAPI) && name !== '') {
        let api = url + name;
        return co.wrap($ajax).call(this, api, type, param, async, loading, jsonType, arr, valiToken)
      } else {
        return co.wrap($ajax).call(this, url, type, param, async, loading, jsonType, arr, valiToken)
      }
    },
    //获取距离当天的时间
    _getDate(n) {
      const date = moment().subtract(n, 'days').format('YYYY-MM-DD');
      return date
    },
    //获取当前时间
    _getCurrentDate(n) {
      const date = moment().subtract(n, 'days').format('YYYY-MM-DD HH:mm:ss');
      return date
    },
    showMsg(msg, scs) {
      Ext.Msg.show({
        cls: 'jz-msg',
        title: '提示信息',
        message: msg,
        buttons: Ext.Msg.YESNO,
        icon: Ext.Msg.QUESTION,
        minWidth: 500,
        fn: function (btn) {
          if (btn === 'yes') {
            scs()
          }
          if (btn === 'no') {
            console.log('No pressed');
          }
        }
      });
    },
    confirm(msg, scs) {
      return this.$confirm(msg, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(scs).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    _dateFormat({
                  date = '',
                  type = 'YYYY-MM-DD'
                } = {}) {
      if (date) {
        return moment(date).format(type)
      } else {
        return ''
      }

    },
    _parseFloat(val, num) {
      if (typeof val === "string") {
        return parseFloat(parseFloat(val).toFixed(num))
      } else if (typeof val === "number") {
        return parseFloat(val.toFixed(num))
      } else {
        return val
      }
    },
    _priceFormat(val) {
      if (typeof val === 'number') {
        return val.div(100)
      } else {
        return val
      }
    },
    isObject(item) {
      return (item !== null && typeof item === 'object' && !Array.isArray(item));
    },
    isEmptyObject(obj) {
      return obj !== null && Object.keys(obj).length == 0
    },
    _go(name, params) {
      if (params) {
        this.$router.push({name, params})
      } else {
        this.$router.push({name})
      }
    },
    _momentAddDay({
                    days = 1,
                    format = 'YYYY-MM-DD'
                  } = {}) {
      return moment().add(days, 'days').format(format)
    },
    _momentSubDay({
                    days = 1,
                    format = 'YYYY-MM-DD'
                  } = {}) {
      return moment().subtract(days, 'days').format(format)
    },
    _moment({
              format = 'YYYY-MM-DD'
            } = {}) {
      return moment().format(format)
    },
  },
}
