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
