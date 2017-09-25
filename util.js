//返回字符串中出现最多的字符
var moststr = function(str) {
  var arr = '';
  if (str != undefined && str != null && str != '') {
    var time = str.length;
    for (var i = 0; i < str.length; i++) {
      var _str = str.replace(new RegExp(str[i], 'g'), '');
      if (_str.length < time) {
        time = _str.length;
        arr = str[i];
      }
      if (_str.length == time && arr.indexOf(str[i]) < 0) {
        arr += str[i];
      }
    }
  }
  return arr;
}
//返回按钮
function goBack() {
  if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) { // IE
    if (history.length > 0) {
      window.history.go(-1);
    } else {
      window.location.href = "/";
    }
  } else { //非IE浏览器
    if (navigator.userAgent.indexOf('Firefox') >= 0 || navigator.userAgent.indexOf('Opera') >= 0 || navigator.userAgent.indexOf('Safari') >= 0 || navigator.userAgent.indexOf('Chrome') >= 0 || navigator.userAgent.indexOf('WebKit') >= 0) {
      if (window.history.length > 1) {
        window.history.go(-1);
      } else {
        window.location.href = "/";
      }
    } else { //未知的浏览器
      window.history.go(-1);
    }
  }
}
