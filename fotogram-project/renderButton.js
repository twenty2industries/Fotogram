const renderButtonArea = document.getElementById("buttonArea");

function renderButton() {
  renderButtonArea.innerHTML = `
        <button>weiter</button>
        <div class="inputArea">INPUT</div>
        <button>zurück</button>
`;
}
renderButton();
