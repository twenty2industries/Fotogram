const renderButtonArea = document.getElementById("buttonArea");

function renderButton() {
  renderButtonArea.innerHTML = `
    <button id='buttonMinus'>zurück</button>
    <div class="inputArea"></div>
    <button id='buttonPlus'>weiter</button>
`;
}
renderButton();
