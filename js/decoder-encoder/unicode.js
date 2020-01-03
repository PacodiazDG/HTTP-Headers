function base(tmp,base) {
    var str = '';
    for(var i = 0; i < tmp.length; i++) {
        str += " "+tmp[i].charCodeAt(0).toString(base);
    }
    str = str.substring(1);

    return str;
}