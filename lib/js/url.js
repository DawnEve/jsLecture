/**
 * 获取GET参数
 * 返回 $_GET 对象, 仿PHP模式
 * @type {{}}
 * @author LTM
 * origin http://www.kancloud.cn/lingtm/func/88494
 */
var $_GET = (function () {
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if (typeof(u[1]) == "string") {
        u = u[1].split("&");
        var get = {};
        for (var i in u) {
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();