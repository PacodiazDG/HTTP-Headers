import {
  basedecode,base
} from '/js/decoder-encoder/unicode.js';

function whitespaces(string) {
  return string.replace(/ /g, '')
}
export function decodemenu(value, text) {
  if (value === "base64Decode") {
    try {
      // base64 Decode
      let decode = (Base64.decode(text)).split("\x00").join('');
      document.getElementById('textencode').value = (decode);
    } catch {
      document.getElementById('textencode').value = "Error";
    }
    return true;
  }
  else if (value === "base64DecodeHaxdecimal") {
    try {
      let decode = base(Base64.decode(text), 16);
      decode=decode.split("0 ").join('00 ');
      document.getElementById('textencode').value = decode;
    } catch (e){
      document.getElementById('textencode').value = "Error"+e;
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