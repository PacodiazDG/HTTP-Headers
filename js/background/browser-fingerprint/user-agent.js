export function useragent() {
	var UserAgent = localStorage.getItem("User-Agent");
	var handler = function(details) {
		for (var i = 0, l = details.requestHeaders.length; i < l; ++i) {
			if (details.requestHeaders[i].name === 'User-Agent') {
				details.requestHeaders[i].value = UserAgent;
				break;
			}
		}
		return {
			requestHeaders: details.requestHeaders
		};
	}
	}
