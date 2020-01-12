




var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = `/css/Theme/${localStorage.getItem("Theme")}.css`;  
head.appendChild(link);  