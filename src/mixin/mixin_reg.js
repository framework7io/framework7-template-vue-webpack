import configs from '../configs.js'

export default {
  data() {
    return {
      RegExp: /^-?\d*\.?\d+$/,
      TelePhone: /^1[34578]\d{9}$/,
      LicensePlate: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$/,
      CarZuowei: /^(\\\d+)|((\\s&&[^\\f\\n\\r\\t\\v])*)$/,
      DriverPhone: /^(1[0-9]{10}$)|(0\\\d{2}\\\d{8}(-\\\d{1,4})?$)|(0\\\d{3}\\\d{7,8}(-\\\d{1,4})?$)$/,
      ThePassword: /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
      RiskWarning: /^[0-9]+([.]{0,1}[0-9]+){0,1}$/,
      CoordinateValue: /^(\-\+)?\\\d+(\.\\\d{1,6})?$/,
      CheckArea: /^(\-\+)?\\\d+(\.\\\d{1,2})?$/,
      ContactPhone: /^(1[0-9]{10})|(0\\\d{2}\\\d{8}(-\\\d{1,4})?)|(0\\\d{3}\\\d{7,8}(-\\\d{1,4})?)$/,
      personAge: /^\\\d+$/,
      MobilePhone: /^1[3|4|5|8][0-9]{9}$/,
      NumberDays: /^100$|^(\d|[1-9]\d)$/,
      ProductCoding: /^[A-Za-z0-9]+$/,
      PriceRegular: /^[0-9]+(.[0-9]{2})?$/,
      ContactPhone1: /^1\d{10}$/,
      ResidentIdentityCard: /^(\d{15}|\d{17}(\d|X))$/,
      ContactPhone2: /^1[34578]\d{9}$/,
      CheckValue: /^((\\s&&[^\\f\\n\\r\\t\\v])*)|(\\\d+)$/,
      ZhengShu: /^\d+$/,
      ContactPhone3: /^[0-9]+$/,
      ContactPhone4: /^1[0-9]{10}$/,
      regPassword: /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/,
      regIDCard: /^(\d{15}|\d{17}(\d|X))$/,
      regFloat: /^(\-\+)?\\\d+(\.\\\d{1,2})?$/,
      priceFloat: /^([1-9]\d*|0)(\.\d{1,2})?$/,
      weightFloat: /^([1-9]\d*|0)(\.\d{1,3})?$/,
      fuDainTwo: /^(([1-9][0-9]*)\\.([0-9]{2}))|[0]\\.([0-9]{2})$/,
      // 两位小数
      regFloat: /^(\-)?\d+(\.\d{1,2})?$/,
      // 大于0两位小数
      regFloatPlus: /^\d+(\.\d{1,2})?$/,
      // 正整数
      regPosPattern: /^\d+$/,
      // 正数
      regPosNumber: /^\d*\.?\d+$/
    }
  },
  methods: {
    _ruleLength(num) {
      return {
        validator: function (rule, value, callback) {
          var val = $.trim(value);
          if (val.length > num) {
            callback(new Error('长度不可超过' + num + '个字符'))
          } else {
            callback();
          }
        }, trigger: 'blur'
      }
    },
    _ruleLoginName() {
      return {
        validator: (function (rule, value, callback) {
          this._ajax({url: configs.userAPI + 'user/list', param: {loginName: $.trim(value)}})
            .then(function (d) {
              if (d.state === 0 && d.aaData && d.aaData.length > 0) {
                callback(new Error('该用户已存在'))
              } else {
                callback();
              }
            })
        }.bind(this)), trigger: 'blur'
      }
    },
    _rulePassword() {
      return {
        validator: (function (rule, value, callback) {
          var val = $.trim(value);
          if (!this.regPassword.test(val)) {
            callback(new Error('密码长度应为6-16位, 数字, 字母, 字符至少包含两种, 同时不能包含中文和空格'))
          } else {
            callback();
          }
        }.bind(this)), trigger: 'blur'
      }
    },
    _ruleExist(api, name, content) {
      return {
        validator: (function (rule, value, callback) {
          let obj = {};
          obj[rule.field] = value;
          this._ajax({url: api, param: obj})
            .then(function (d) {
              if (d.state === 0 && d.aaData && d.aaData.length > 0) {
                callback(new Error(name + '已存在'))
              } else {
                callback();
              }
            })
        }.bind(this)), trigger: 'blur'
      }
    },
    _ruleMobile() {
      return {
        validator: (function (rule, value, callback) {
          var val = $.trim(value);
          if (val.length > 0 && !this.MobilePhone.test(val)) {
            callback(new Error('请输入正确的手机号码'))
          } else {
            callback();
          }
        }.bind(this)), trigger: 'blur'
      }
    },
    _ruleIDCard() {
      return {
        validator: (function (rule, value, callback) {
          var val = $.trim(value);
          if (val.length > 0 && !this.regIDCard.test(val)) {
            callback(new Error('请输入正确的身份证号'))
          } else {
            callback();
          }
        }.bind(this)), trigger: 'blur'
      }
    },
    _ruleTwoFloat() {
      return {
        validator: (function (rule, value, callback) {
          var val = $.trim(value);
          if (val.length > 0 && !this.regFloatPlus.test(val)) {
            callback(new Error('请输入大于等于零的数字,最多保留两位小数'))
          } else {
            callback();
          }
        }.bind(this)), trigger: 'blur'
      }
    },
    _ruleRequired({
                    flag = true,
                    name = ''
                  } = {}) {
      return {
        validator: (function (rule, value, callback) {
          var val = $.trim(value);
          if (val.length <= 0 && flag) {
            callback(new Error(name + '不能为空'))
          } else {
            callback();
          }
        }.bind(this)), trigger: 'blur'
      }
    },
    _rulePosPattern() {
      return {
        validator: (function (rule, value, callback) {
          var val = $.trim(value);
          if (val.length > 0 && !this.regPosPattern.test(val)) {
            callback(new Error('请输入大于零的整数'))
          } else {
            callback();
          }
        }.bind(this)), trigger: 'blur'
      }
    },
  }
}
