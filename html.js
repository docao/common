function doFilter(html, filters) {
		var stack = [];
		var data = html.replace(/<(?:.|\n)*?>/gm, function(match){
			if(match.substring(0, 4) == '<!--') return '';
			if(match.lenth <= 2) return '';
			if(match.charAt(1) == '/') {
				var len = stack.length;
				if(len > 0 && stack[len-1] == match.substring(2, match.length-1).toLowerCase()) stack.pop();
				return match;
			}
			var $match = $(match), tag = $match.prop('tagName').toLowerCase();
			stack.push(tag);
			if(filters[tag]) {
				var filter = filters[tag];
				if($.isFunction(filter)) $match = filter($match);
				else if(filter === true) $match = $('<' + tag + '>');
			} else $match = $('<' + tag + '>');
			
			match = $match.prop('outerHTML');		
			return match.substring(0, match.lastIndexOf('</'));
		});
		if(stack.length > 0) return html.replace(/<(?:.|\n)*?>/gm, '');
		return data;
	}
