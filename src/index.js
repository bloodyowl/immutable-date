class ImmutableDate {
  constructor(...args) {
    this._date = new Date(...args)
  }
}

const methods = {
  toString: false,
  toISOString: false,
  toUTCString: false,
  toDateString: false,
  toTimeString: false,
  toLocaleString: false,
  toLocaleDateString: false,
  toLocaleTimeString: false,
  valueOf: false,
  getTime: false,
  getFullYear: false,
  getUTCFullYear: false,
  toGMTString: false,
  getMonth: false,
  getUTCMonth: false,
  getDate: false,
  getUTCDate: false,
  getDay: false,
  getUTCDay: false,
  getHours: false,
  getUTCHours: false,
  getMinutes: false,
  getUTCMinutes: false,
  getSeconds: false,
  getUTCSeconds: false,
  getMilliseconds: false,
  getUTCMilliseconds: false,
  getTimezoneOffset: false,
  setTime: true,
  setMilliseconds: true,
  setUTCMilliseconds: true,
  setSeconds: true,
  setUTCSeconds: true,
  setMinutes: true,
  setUTCMinutes: true,
  setHours: true,
  setUTCHours: true,
  setDate: true,
  setUTCDate: true,
  setMonth: true,
  setUTCMonth: true,
  setFullYear: true,
  setUTCFullYear: true,
  setYear: true,
  getYear: false,
  toJSON: false,
}

function createMethod(key, isMutator) {
  if(!isMutator) {
    return function patchedDateMethod(...args) {
      return Date.prototype[key].apply(this._date, args)
    }
  }
  return function patchedDateMethod(...args) {
    const clone = new Date(this._date.valueOf())
    Date.prototype[key].apply(clone, args)
    return new ImmutableDate(clone)
  }
}

Object.keys(methods).forEach((key) => {
  // loose, damn IE8
  ImmutableDate.prototype[key] = createMethod(key, methods[key])
})

export default ImmutableDate
