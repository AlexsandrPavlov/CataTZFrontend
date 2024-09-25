import './style.css';
document.getElementById('encodeButton').addEventListener('click', function() {
  let inputText = document.getElementById('inputText').value;
  let encodedText = encodeText(inputText);
  document.getElementById('outputText').textContent = encodedText;
});



document.getElementById('copyButton').addEventListener('click', function() {
  let outputText = document.getElementById('outputText').textContent;
  navigator.clipboard.writeText(outputText)
  .then(() => alert('Текст скопирован в буфер обмена'))
  .catch((err) => console.error('Не удалось скопировать текст: ', err));
});



function encodeText(input) {
  let encoded = '';
  let count = 1;
  for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i+1]) {
          count++;
      } else {
          if (count === 1) {
              encoded += input[i];
          } else {
              encoded += count + input[i];
          }
          count = 1;
      }
  }
  return encoded;
}
// блок вывода сделал видимым для себа, в css можно убрать если убрать обводку 