function sandwich(condicao) {
	if (!condicao)
		document.getElementById("menu-sandwich").style.background = "url(_imagens/_icones/burger.png) no-repeat";
	else 
		document.getElementById("menu-sandwich").style.background = "url(_imagens/_icones/burger-dois.png) no-repeat";
}
