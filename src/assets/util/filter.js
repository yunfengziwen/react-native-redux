// function format(time) {
//     return item > 0 ? item : '0'+item
// }

export const formatTime = (time, fmt) => {
  time = time/1000
  fmt = fmt || 'hh:mm:ss';

  let o = {
    'h+': parseInt(time / 60 / 60),
    'm+': parseInt(time / 60 % 60),
    's+': parseInt(time % 60),
  }

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      str = str.length > 1 ? str : 0 + str;
      fmt = fmt.replace(RegExp.$1, str);
    }
  }

  return fmt;
}