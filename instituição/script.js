function openMenu(){
    var abrirMenu = document.getElementById("menu-mobile");
    abrirMenu.style.display = 'flex';
    var sanduiche = document.getElementById("wrap-open");
    sanduiche.style.display = 'none';
}

function fechar(){
    var abrirMenu = document.getElementById("menu-mobile");
    abrirMenu.style.display = 'none';
    var sanduiche = document.getElementById("wrap-open");
    sanduiche.style.display = 'flex';
}