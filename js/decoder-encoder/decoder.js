
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('encoder').addEventListener('change', (e) => {
    var text = document.getElementById("text").value;
    if (e.target.value === "decimalenc") {
      document.getElementById('textencode').value = base(text, 10);
    } else if (e.target.value === "hexadecimalenc") {
      document.getElementById('textencode').value = base(text, 16);
    } else if (e.target.value === "binaryenc") {
      var fix = base(text, 2);
      fix = fix.split(" ").join(" 0");
      fix = fix.replace(/^/, "0");
      document.getElementById('textencode').value = fix;
    }
    else if (e.target.value === "octalenc") {
      document.getElementById('textencode').value = base(text, 8);
    }
    else if (e.target.value === "ASCII") {
      document.getElementById('textencode').value = text;
    }
    else if (e.target.value === "base64Encode") {
      document.getElementById('textencode').value = btoa(text);
    }
    else if (e.target.value === "base64Decode") {
      try {
        document.getElementById('textencode').value = atob(text);
      } catch {
        document.getElementById('textencode').value = "Error";
      }
    }
    else if (e.target.value === "encodeURIComponent") {
      try {
        document.getElementById('textencode').value = encodeURIComponent(text);
      } catch {
        document.getElementById('textencode').value = "Error";
      }
    }
    else if (e.target.value === "encodeURI") {
      try {
        document.getElementById('textencode').value = encodeURI(text);
      } catch {
        document.getElementById('textencode').value = "Error";
      }
    }
    else if (e.target.value === "escape") {
      try {
        document.getElementById('textencode').value = escape(text);
      } catch {
        document.getElementById('textencode').value = "Error";
      }
    }
    else if (e.target.value === "decodeURIComponent") {
      try {
        document.getElementById('textencode').value = decodeURIComponent(text);
      } catch {
        document.getElementById('textencode').value = "Error";
      }
    }
// Decode strings base
   else if (e.target.value === "DecimalDec") {
      try {
      document.getElementById('textencode').value = basedecode(text, 8);
      } catch {
        document.getElementById('textencode').value = "Error";
      }
    }
    else {}
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