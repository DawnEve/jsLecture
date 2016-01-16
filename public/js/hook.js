//origin http://www.phper.org.cn/index.php?m=content&a=show&post_id=378


var hooks = {
	queue: [],
	//在钩子上添加函数
	addAction: function(hook, func) {
		hooks.queue[hook] || (hooks.queue[hook] = new Array());
		if(typeof func == 'function') {
			hooks.queue[hook].push(func);
		} else if(typeof func == 'string') {
			hooks.queue[hook].push(window[func]);
		}
	},
	//执行钩子上的函数
	doAction: function(hook) {
		var parameters = Array.prototype.slice.call(arguments, 1);
		var functions = hooks.queue[hook];
		if(functions == null) return true;
		var flag = true;
		for(var i=0; i < functions.length; i++) {
			var result = hooks.call_user_func_array(functions[i], parameters);
			if(result != null) flag = flag && result;
		}
		return flag;
	},
	//执行用户自定义回调函数
	call_user_func_array: function(cb, parameters) {
		if (typeof cb === 'string') {
			func = (typeof hooks[cb] === 'function') ? hooks[cb] : func = (new Function(null, 'return ' + cb))();
		} else if (cb instanceof Array) {
			func = ( typeof cb[0] == 'string' ) ? eval(cb[0]+"['"+cb[1]+"']") : func = cb[0][cb[1]];
		} else if (typeof cb === 'function') {
			func = cb;
		}
		if (typeof func != 'function') {
			throw new Error(func + ' is not a valid function');
		}
		if(typeof parameters == 'undefined') {
			var tmp_ary = [];
			var parameters = Array.prototype.slice.call(tmp_ary, 1);  
		}
		return (typeof cb[0] === 'string') ? func.apply(eval(cb[0]), parameters) :
			( typeof cb[0] !== 'object' ) ? func.apply(null, parameters) : func.apply(cb[0], parameters);
	}
}