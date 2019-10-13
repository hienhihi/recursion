// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined) {
      return undefined
  } else if (obj === null) {
    return 'null'
  } else if (obj.constructor === String) {
    return '"' + obj.replace(/"/g, '\\"') + '"'
  } else if (obj.constructor === Number) {
    return String(obj)
  }  else if (obj.constructor === Boolean) {
    return obj ? 'true' : 'false'
  } else if (obj.constructor === Array) {
    return '[' + obj.reduce((acc, v) => {
      if (v === undefined) {
        return [...acc, 'null']
      } else
          {return [...acc, stringifyJSON(v)]}
      }, []).join(',') + ']';
    } else if (obj.constructor === Object) {
      var keys = Object.keys(obj);			//should takes care of the unstringifiableValues array.
      if (keys.includes('functions')) {
        return "{}";
      } else {
        return '{' + Object.keys(obj).reduce((acc, k) => {
          if (obj[k] === undefined) {
            return acc
          } else {
            return [...acc, stringifyJSON(k) + ':' + stringifyJSON(obj[k])]
          }
        }, []).join(',') + '}'
      }
    }
    else
    { return '{}'}
};
