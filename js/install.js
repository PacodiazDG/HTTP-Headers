if (localStorage.getItem("install")===null){
localStorage.setItem("Debugging1",true);
localStorage.setItem("Debugging2",false);
localStorage.setItem("Debugging3",false);
localStorage.setItem("Debugging4",false);
localStorage.setItem("Debugging5",false);
localStorage.setItem("Debugging6",false);
localStorage.setItem("Debugging7",false);
localStorage.setItem("varcommand","bgfbfgbfgbfgb");
localStorage.setItem("waflevel",1);
localStorage.setItem("status",false);
localStorage.setItem("keyshodan","");
localStorage.setItem("Enableshodan1",true);
localStorage.setItem("install",true);
chrome.tabs.create({ url: "options.html" });
}