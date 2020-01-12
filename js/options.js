function getactivelocalStorage(namestorage, id) {
  document.getElementById('waflevel').value = localStorage.getItem("waflevel");
  for (var i = 1; i <= id; i++) {
    var Debugging = namestorage + i;
    console.log(Debugging);
    if (localStorage.getItem(Debugging) == "true") {
      document.getElementById(Debugging).checked = true;
    }
  }
}
/*******************************************************************************************/
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem("keyshodan") === "") {
    document.getElementById("apikeyi").innerText = "To use shodan you need the api key";
    alert("To use shodan you need the api key")
  }
  document.getElementById("currentmethods").textContent = localStorage.getItem('httpmethods');
  getactivelocalStorage("Debugging", 9);
  getactivelocalStorage("Enableshodan", 1);
  document.getElementById('shodanapikey').value = localStorage.getItem("keyshodan");
  document.getElementById('varcommand').value = localStorage.getItem("varcommand");
  /*******************************************************************************************/
  var waflevel = document.getElementById('waflevel');
  waflevel.addEventListener('change', () => {
    localStorage.setItem("waflevel", (document.getElementById("waflevel").value));
  });
  /*******************************************************************************************/
  /*******************************************************************************************/
  var Debugging1 = document.getElementById('Debugging1');
  Debugging1.addEventListener('click', () => {
    if (Debugging1.checked) {
      localStorage.setItem("Debugging1", "true");
    } else {
      localStorage.setItem("Debugging1", "false");
    }
  });
  /******************************************************************************************/
  /*******************************************************************************************/
  var Debugging2 = document.getElementById('Debugging2');
  Debugging2.addEventListener('click', () => {
    if (Debugging2.checked) {
      localStorage.setItem("Debugging2", "true");
    } else {
      localStorage.setItem("Debugging2", "false");
    }
  });
  /******************************************************************************************/
  /*******************************************************************************************/
  var Debugging3 = document.getElementById('Debugging3');
  Debugging3.addEventListener('click', () => {
    if (Debugging3.checked) {
      localStorage.setItem("Debugging3", "true");
    } else {
      localStorage.setItem("Debugging3", "false");
    }
  });
  /******************************************************************************************/
  /*******************************************************************************************/
  var Debugging4 = document.getElementById('Debugging4');
  Debugging4.addEventListener('click', () => {
    if (Debugging4.checked) {
      localStorage.setItem("Debugging4", "true");
    } else {
      localStorage.setItem("Debugging4", "false");
    }
  });
  /******************************************************************************************/
  /*******************************************************************************************/
  var Debugging5 = document.getElementById('Debugging5');
  Debugging5.addEventListener('click', () => {
    if (Debugging5.checked) {
      localStorage.setItem("Debugging5", "true");
    } else {
      localStorage.setItem("Debugging5", "false");
    }
  });
  /*******************************************************************************************/
  /*******************************************************************************************/
  var Debugging6 = document.getElementById('Debugging6');
  Debugging6.addEventListener('click', () => {
    if (Debugging6.checked) {
      localStorage.setItem("Debugging6", "true");
    } else {
      localStorage.setItem("Debugging6", "false");
    }
  });
  /*******************************************************************************************/
  var Debugging7 = document.getElementById('Debugging7');
  Debugging7.addEventListener('click', () => {
    if (Debugging7.checked) {
      localStorage.setItem("Debugging7", "true");
    } else {
      localStorage.setItem("Debugging7", "false");
    }
  });
  /******************************************************************************************/
  var Debugging8 = document.getElementById('Debugging8');
  Debugging8.addEventListener('click', () => {
    if (Debugging8.checked) {
      localStorage.setItem("Debugging8", "true");
    } else {
      localStorage.setItem("Debugging8", "false");
    }
  });
  /******************************************************************************************/
  var apikeyshodan = document.getElementById('shodanapikeygo');
  apikeyshodan.addEventListener('click', () => {
    localStorage.setItem("keyshodan", (document.getElementById("shodanapikey").value));
    var apikeyi = document.getElementById('apikeyi');
    apikeyi.remove();
  });
  /******************************************************************************************/
  var _0x = document.getElementById('_0x');
  _0x.addEventListener('click', () => {
    var comm = document.getElementById("varcommand").value;
    try
    {
      var myobj = JSON.parse(comm);
      Object.keys(myobj.vars).forEach(function(key) {
        console.log(myobj.vars[key]);
      });
      if (comm.includes("'")) {
        document.getElementById("dangerous").innerText = "No valid";
        return 0;
      }
    } catch (a) {
      document.getElementById("dangerous").innerText = "No valid";
      return 0;
    }
    localStorage.setItem("varcommand", (comm));
    document.getElementById("dangerous").innerText = "";
  });
  /******************************************************************************************/
  var Enableshodan1 = document.getElementById('Enableshodan1');
  Enableshodan1.addEventListener('click', () => {
    if (Enableshodan1.checked) {
      localStorage.setItem("Enableshodan1", "true");
    } else {
      localStorage.setItem("Enableshodan1", "false");
    }
  });
  /******************************************************************************************/
  document.getElementById('Methods').addEventListener('change', (e) => {
    localStorage.setItem("httpmethods", e.target.value);
    document.getElementById("currentmethods").textContent = e.target.value;
  });
  /******************************************************************************************/
  document.getElementById('Theme').addEventListener('change', (e) => {
    localStorage.setItem("Theme", e.target.value);
  });
});
/******************************************************************************************/