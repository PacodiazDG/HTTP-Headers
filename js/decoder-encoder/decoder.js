import {
  encode
} from '/js/decoder-encoder/encodemenu.js';
import {
  decodemenu
} from '/js/decoder-encoder/decodemenu.js';
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('encoder').addEventListener('change', (e) => {
    var text = document.getElementById("text").value;
    let value = e.target.value;
    encode(value, text);
    decodemenu(value, text);
  });
  var replacebutton = document.getElementById('Replacebutton');
  replacebutton.addEventListener('click', () => {
    var textencode = document.getElementById("textencode").value;
    var find = document.getElementById("Find").value;
    var Replace = document.getElementById("Replace").value;
    var final = textencode.split(find).join(Replace);
    if (document.getElementById('beginningReplace').checked) {
      final = final.replace(/^/, Replace);
    }
    document.getElementById('textencode').value = final;
  }, false);
});