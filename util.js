//返回字符串中出现最多的字符
var moststr = function(str) {
    var arr = '';
    if(str != undefined && str != null && str != '') {
        var time = str.length;
        for(var i = 0; i < str.length; i++) {
            var _str = str.replace(new RegExp(str[i], 'g'), '');
            if(_str.length < time) {
                time = _str.length;
                arr = str[i];
            }
            if(_str.length == time && arr.indexOf(str[i]) < 0) {
                arr += str[i];
            }
        }
    }
    return arr;
}
//返回按钮
function goBack() {
    if((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) { // IE
        if(history.length > 0) {
            window.history.go(-1);
        } else {
            window.location.href = "/";
        }
    } else { //非IE浏览器
        if(navigator.userAgent.indexOf('Firefox') >= 0 || navigator.userAgent.indexOf('Opera') >= 0 || navigator.userAgent.indexOf('Safari') >= 0 || navigator.userAgent.indexOf('Chrome') >= 0 || navigator.userAgent.indexOf('WebKit') >= 0) {
            if(window.history.length > 1) {
                window.history.go(-1);
            } else {
                window.location.href = "/";
            }
        } else { //未知的浏览器
            window.history.go(-1);
        }
    }
}
//组合最大数
function demo() {
    var arr = [1, 20, 23, 4, 8];
    var str = arr.toString();
    var _arr = str.split(",");
    console.log('Yes', max(_arr));
}

function max(arr) {
    if(arr == '' || arr == null) {
        return '';
    }
    var big = arr[0];
    var num = 0;
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) {
            big = arr[i];
            num = i;
        }
    }
    arr.splice(num, 1);
    return big + max(arr);
}
//加载script
var gwdshare = gwdshare || {
    version: "1.0",
    udata: "type=tools&amp;uid=12138",
    pageFilter: "",
    jsLoaded: false
};
(function() {
    function async_load() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn.bootcss.com/lodash.js/3.10.1/lodash.min.js';
        var x = document.getElementsByTagName('script'),
            y = x[x.length - 1];
        y.parentNode.appendChild(s);
    }
    if(!gwdshare.jsLoaded) {
        if(window.attachEvent) window.attachEvent('onload', async_load);
        else window.addEventListener('load', async_load, false);
        gwdshare.jsLoaded = true;
    }
})();
//加载js库之后使用
function _getScript(f, h) {
    var j = document.getElementsByTagName("head")[0],
        i = document.createElement("script");
    i.setAttribute("type", "text/javascript");
    i.setAttribute("src", f);
    j.appendChild(i);
    var g = function() {
        if(typeof h === "function") {
            h()
        }
    };
    if(document.all) {
        i.onreadystatechange = function() {
            if(i.readyState == "loaded" || i.readyState == "complete") {
                g()
            }
        }
    } else {
        i.onload = function() {
            g()
        }
    }
};
if(typeof($) != "undefined") {
    $.getScript = _getScript
}
$.getScript("https://cdn.bootcss.com/lodash.js/3.10.1/lodash.min.js", function() {
    console.log('lodash');
    $.getScript("js/zhaofei-2017.js");
});
//jquery自带
$.getScript("https://cdn.bootcss.com/lodash.js/3.10.1/lodash.min.js", function() {
    console.log('lodash');
    $.getScript("js/zhaofei-2017.js");
});
