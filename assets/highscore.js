

function renderFinishers() {
    var highScoreJSON = JSON.parse(localStorage.getItem("highScoreList"));
    for (i = 0; i < highScoreJSON.length; i++) {
        var finisher = highScoreJSON[i];
        var list = document.createElement("li")
        list.textContent = finisher
        highScoreList.appendChild(list);
    }
}
renderFinishers();