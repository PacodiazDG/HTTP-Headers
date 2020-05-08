export function base(tmp,base) {
    var str = '';
    for(var i = 0; i < tmp.length; i++) {
        str += " "+tmp[i].charCodeAt(0).toString(base);
    }
    str = str.substring(1);
    return str;
}
export function basedecode(hex,base,lengths) {
    var str = '';
    for (var i = 0; i < hex.length; i += lengths) {
        var v = parseInt(hex.substr(i, lengths), base);
        if (v) str += String.fromCharCode(v);
    }
    return str;
}  
