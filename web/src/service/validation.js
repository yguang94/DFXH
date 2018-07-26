class Validation {
  checkMobile (v) {
    if (!(/^1[0-9][0-9]\d{4,8}$/.test(v))) {
      return false
    }
    return true
  }

  isEmail (v) {
    let re = /^(.+)@(.+)$/
    return re.test(v)
  }

  isNum (v) {
    let re = /^[0-9]+.?[0-9]*$/
    return re.test(v)
  }

  isMoney (v) {
    let re = /^-?\d+(\.\d{1,2})?$/
    return re.test(v)
  }

  isLen (v, max, min) {
    if (!v && min) {
      return false
    }
    if (max && v.length > max) {
      return false
    }
    if (min && v.length < min) {
      return false
    }
    return true
  }
}

var v = new Validation()
export default v
