function Callbackuseragent(Header) {
	var UserAgent = localStorage.getItem("User-Agent");
	if (UserAgent == null) {
		return;
	}
	if((localStorage.getItem("UserAgent1"))==="false"||(localStorage.getItem("status") === "false")){
		chrome.webRequest.onBeforeSendHeaders.removeListener(
			Callbackuseragent
		);
	}
	for (var i = 0, l = Header.requestHeaders.length; i < l; ++i) {
		if (Header.requestHeaders[i].name !== 'User-Agent') {
			continue;
		}
		Header.requestHeaders[i].value = UserAgent;
		break;
	}
	return {
		requestHeaders: Header.requestHeaders
	};
}
export function UserAgent() {
	chrome.webRequest.onBeforeSendHeaders.addListener(
		Callbackuseragent,
		{ urls: ["<all_urls>"] },
		["blocking", "requestHeaders"]
	);
}