function setCookie(name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if(expires != null) {
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 7 * 3600 * 24));
    }
    document.cookie = name + "=" + escape(value) + (
        (expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString()));
}

function getCookie(Name) {
    var search = Name + "="
    if(document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if(offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if(end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        } else return ""
    }
}

function deleteCookie(name) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() - (86400 * 1000 * 1));
    setCookie(name, "", expdate);
}
//1、存储Cookie
//2、参数说明： 1、参数1：Cookie存储Name，参数2：Cookie要存储的值
//3、例子如下：
setCookie('source', 'yidong');
//1、获取Cookie
//2、参数说明： 1、参数1：Cookie存储的Name
//3、例子如下：
getCookie('source');
//1、删除Cookie
//2、参数说明： 1、参数1：Cookie存储的Name
//3、例子如下：
// deleteCookie('source');
var address = window.location.href;
if(address.indexOf('yidong') >= 0) {
    $('.title01').eq(1).hide();
    $('.userable').hide();
    $('.eol-img').hide();
    $('.bottom-naval').hide();
    setCookie('source', 'yidong');
} else {
    if(getCookie('source') == 'yidong') {
        $('.title01').eq(1).hide();
        $('.userable').hide();
        $('.eol-img').hide();
        $('.bottom-naval').hide();
    }
}
