import {
  basedecode
} from '/js/decoder-encoder/unicode.js';

function whitespaces(string) {
  return string.replace(/ /g, '')
}
export function decodemenu(value, text) {
  if (value === "base64Decode") {
    try {
      // base64 Decode
      document.getElementById('textencode').value = atob(text);
    } catch {
      document.getElementById('textencode').value = "Error";
    }
    return true;
  }
  else if (value === "decodeURIComponent") {
    try {
      document.getElementById('textencode').value = decodeURIComponent(text);
    } catch {
      document.getElementById('textencode').value = "Error";
    }
    return true;
  }
  else if (value === "DecimalDecode") {
    try {
      document.getElementById('textencode').value = basedecode(whitespaces(text), 10, 3);;
    } catch {
      document.getElementById('textencode').value = "Error";
    }
    return true;
  }
  else if (value === "HexadecimalDecode") {
    try {
      document.getElementById('textencode').value = basedecode(whitespaces(text), 16, 2);;
    } catch {
      document.getElementById('textencode').value = "Error";
    }
    return true;
  }
  else if (value === "OctalDecode") {
    try {
      document.getElementById('textencode').value = basedecode(whitespaces(text), 8, 3);;
    } catch {
      document.getElementById('textencode').value = "Error";
    }
    return true;
  }
  else {
    return false;
  }
}