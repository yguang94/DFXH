// import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
const BaseCommon = class BaseCommon {
  getType (o) {
    if (o instanceof Array) {
      return 'Array'
    }else if (o instanceof Object) {
      return 'Object'
    }
    return ''
  }

  cloneObj (oldObj) {
    if (typeof (oldObj) !== 'object') {
      return oldObj
    }
    if (oldObj == null) {
      return oldObj
    }

    let newObj = oldObj.constructor === Array ? [] : {}
    for (let i in oldObj) {
      newObj[i] = typeof oldObj[i] === 'object' ? this.cloneObj(oldObj[i]) : oldObj[i]
    }
    return newObj
  }

  merge (arr1, arr2) {
    if (!arr1) {
      arr1 = []
    }
    let arr = arr1.concat(arr2)
    arr = arr.sort()
    let res = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
        res.push(arr[i])
      }
    }
    return res
  }

  exist (arr, target, proc) {
    let isExist = false
    if (this.getType(arr) !== 'Array' || !target) {
      return false
    }
    if (this.getType(target) === 'Object') {
      for (let o of arr) {
        let match = true
        for (let k in target) {
          if ((o[k] + '') !== (target[k] + '')) {
            match = false
            break
          }
        }
        if (match) {
          isExist = true
          if (proc) {
            proc(o)
          }
        }
      }
    }else {
      for (let o of arr) {
        if ((o + '') === (target + '')) {
          if (proc) {
            proc(o)
          }
          isExist = true
        }
      }
    }
    return isExist
  }

  dateFormat (dt, fmt) {
    if (!dt) {
      return ''
    }
    var o = {
      'M+': dt.getMonth() + 1,
      'd+': dt.getDate(),
      'h+': dt.getHours(),
      'm+': dt.getMinutes(),
      's+': dt.getSeconds(),
      'q+': Math.floor((dt.getMonth() + 3) / 3),
      'S': dt.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (dt.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }


  call (url, data, isProcFail) {
    let that = this
    return new Promise(function (resolve, reject) {
      let realURL = '/api/' + url
      axios.post(realURL,Qs.stringify(data))
        .then(res => {
          res = res.data
          console.log(res)
          if (res.code === 200) {
            console.log(666)
            resolve(res.data)
            return
          }
          if (res.code === 502) {
            that.alert( '抱歉!您没有权限')
            return
          }
          if (res.code === 403) {
            console.log('超时了')
            that.alert('抱歉!登录超时,请重新登录')
            console.log(url)
            window.location.href = '/'
            return
          }
          if (isProcFail) {
            that.$message({
              showClose: true,
              message: res.message,
              type: 'error',
              center: true
            })
          }
          reject(res.message)
        })
    })
  }

  alert (msg) {
    window.alert(msg)
  }

  /**
   自动完成控件封装
   help: http://api.jqueryui.com/autocomplete/#option-source
   obj: input jquery object
   vals: 值列表 ['a','b'] or [ { label: "Choice1", value: "value1" }, ... ]
   selectCall: 选择值后回调
   **/
  autocomplete (obj, vals, selectCall) {
    if (!obj) {
      return
    }
    obj.autocomplete({
      source: function (request, response) {
        let results = $.map(vals, function (item) {
          if (/^[0-9]+.?[0-9]*$/.test(request.term)) {
            if (item.value.indexOf(request.term) === 0) {
              return item
            }else {
              return null
            }
          }else {
            if (item.value.indexOf(request.term) >= 0) {
              return item
            }else {
              return null
            }
          }
        })
        return response(results)
      },
      minLength: 0,
      autoFocus: true,
      select: function (event, ui) {
        // obj.val(ui.item.value)
        if (selectCall) {
          selectCall(event, ui)
        }
      }
    })
    obj.on('focus', function () {
      obj.autocomplete('search', '')
    })
  }

  // 千分位
  commafy (num) {
    num = (num + '').trim()
    num = num.replace(/,/g, '')
    if (num === '') {
      return ''
    }
    if (isNaN(num)) {
      return ''
    }
    let t = parseFloat(num).toFixed(2)
    num = t + ''
    if (/^.*\..*$/.test(num)) {
      let pointIndex = num.lastIndexOf('.')
      let intPart = num.substring(0, pointIndex)
      let pointPart = num.substr(pointIndex + 1, 2)
      // console.log('debug:', num, pointIndex, pointPart)
      intPart = intPart + ''
      let re = /(-?\d+)(\d{3})/
      while (re.test(intPart)) {
        intPart = intPart.replace(re, '$1,$2')
      }
      num = intPart + '.' + pointPart
    }else {
      let re = /(-?\d+)(\d{3})/
      while (re.test(num)) {
        num = num.replace(re, '$1,$2')
      }
    }
    if (num.lastIndexOf('.') === -1) {
      num = num + '.00'
    }
    return num
  }

  // 去除千分位
  // @param{Object}num
  delcommafy (num) {
    num = num + ''
    if (num.trim() === '') {
      return ''
    }
    num = num.replace(/,/gi, '')
    return num
  }

  clone (obj) {
    let o = {}
    $.extend(o, obj)
    return o
  }

  escapeHtml (string) {
    let entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#x2F;'
    }
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s]
    })
  }

  download (url, data) {
    if (!url || !data) {
      return
    }
    let realURL = '/api/' + url
    var inputs = ''
    for (let p in data) {
      inputs += '<input type="hidden" name="' + p + '" value="' + this.escapeHtml(data[p]) + '" />'
    }
    jQuery('<form action="' + realURL + '" method="post">' + inputs + '</form>').appendTo('body').submit().remove()
  }

  toTitleName (titleList, code) {
    let txt = ''
    this.exist(titleList, {code: code}, function (o) {
      txt = o.code + '-' + o.name
    })
    return txt
  }

  buildURL (url, params) {
    if (!params) {
      return url
    }
    if (url.indexOf('?') === -1) {
      url += '?'
    }
    for (let p in params) {
      url += '&' + p + '=' + params[p]
    }
    return url
  }

  buildAccPeriodOptions (initData, cb) {
    let op = []
    if (!initData) {
      return
    }
    for (let o of initData.accPeriods) {
      if (o.state === 0) {
        continue
      }
      op.push({
        id: o.year + '-' + o.inx,
        text: o.year + '-' + o.inx
      })
    }
    op = op.reverse()
    if (cb) {
      cb(op, initData.curPeriod)
    }
    return op
  }

  getCookie (name) {
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    let arr = document.cookie.match(reg)
    if (arr) {
      return unescape(arr[2])
    } else {
      return null
    }
  }
}

export default BaseCommon
