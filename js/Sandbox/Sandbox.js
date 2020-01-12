document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('html').value = `<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
</body>
</html>
`;

  var run = document.getElementById('Run');
  run.addEventListener('click', () => {


var textarea = document.getElementById('html');
console.log(textarea.value);
      let wind = window.open('', 'someName', 'resizable,scrollbars');
            wind.document.body.innerHTML =textarea.value;
            wind.document.title = "Sandbox.js";
            wind.focus();

});
  });

