const renderButtonArea = document.getElementById("buttonArea");

function renderButton() {
  renderButtonArea.innerHTML = `
    <button id='buttonMinus' onclick="previousPicture()">zurück</button>
    <div class="inputArea"></div>
    <button id='buttonPlus' onclick="nextPicture()">weiter</button>
`;
}
renderButton();
