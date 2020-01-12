function codeinjection(argument) {
  return `var script = document.createElement("script");
script.type="text/javascript";
script.innerHTML=\`
console.info('%c  Bypass AntiDebugging running', 'color:#00FF13; font-size:16px; font-weight: bold;');
${argument}
\`;
document.getElementsByTagName('head')[0].appendChild(script);`
}

export function code(url) {
   return codeinjection(url);
}

export function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  }