function Callbackuseragent(details) {
	var UserAgent = localStorage.getItem("User-Agent");
if (UserAgent==null){
	return;
}
	for (var i = 0, l = details.requestHeaders.length; i < l; ++i) {
			if (details.requestHeaders[i].name !== 'User-Agent') {
				continue;
			}
			details.requestHeaders[i].value = UserAgent;
			break;
		}
		return {
			requestHeaders: details.requestHeaders
		};
	}
export function UserAgent() {
		chrome.webRequest.onBeforeSendHeaders.addListener(
			Callbackuseragent,
			{ urls: ["<all_urls>"] },
			["blocking", "requestHeaders"]
		);
	}