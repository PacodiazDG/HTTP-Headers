if (localStorage.getItem("install") === null) {
	localStorage.setItem("Debugging1", false);
	localStorage.setItem("Debugging2", false);
	localStorage.setItem("Debugging3", false);
	localStorage.setItem("Debugging4", false);
	localStorage.setItem("varcommand", '{"vars":["_0x","navigator","BigInt"]}');
	localStorage.setItem("waflevel", 1);
	localStorage.setItem("status", false);
	localStorage.setItem("keyshodan", "");
	localStorage.setItem("httpmethods", "HEAD");
	localStorage.setItem("Theme", "Default");
	localStorage.setItem("Enableshodan1", true);
	localStorage.setItem("UserAgent1", false);
	localStorage.setItem("UserAgent1javasc1", false);
	localStorage.setItem("install", true);
	localStorage.setItem("ProxyEnabe1", false);
	chrome.tabs.create({
		url: "options.html"
	});
}