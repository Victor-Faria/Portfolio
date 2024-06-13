
document.addEventListener("DOMContentLoaded", function() {
    var loadingGrid = document.getElementById("loading-grid");
    var pageTitle = document.getElementById("page-title");

    var squareSize = 200;


    var columns = Math.ceil(window.innerWidth / squareSize);
    var rows = Math.ceil(window.innerHeight / squareSize);

    loadingGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    loadingGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (var i = 0; i < columns * rows; i++) {
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.style.width = `${squareSize}px`;
        gridItem.style.height = `${squareSize}px`;
        loadingGrid.appendChild(gridItem);
    }

    
    pageTitle.style.left = `calc(50% - ${pageTitle.offsetWidth / 2}px)`;
    pageTitle.style.top = `calc(50% - ${pageTitle.offsetHeight / 2}px)`;

    // Função para alterar a cor de um quadrado aleatoriamente
    function changeColorRandomly() {
        var gridItems = document.querySelectorAll(".grid-item");
        for (let i = 0; i < gridItems.length; i++) {
            setTimeout(() => {
                gridItems[i].style.background = "#083f91"; 
            }, Math.random() * 1000);
        }
    }

   
    changeColorRandomly();

    setTimeout(function() {
        var loadingScreen = document.getElementById("loading-screen");

       
        loadingScreen.style.opacity = 0;

        setTimeout(function() {
            loadingScreen.style.display = "none";
        }, 500); 
    }, 1000);
});
