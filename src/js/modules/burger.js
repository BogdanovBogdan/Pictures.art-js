const burger = (burgerMenuSelector, burgerSelector) => {
	const burgerMenu = document.querySelector(burgerMenuSelector),
		burger = document.querySelector(burgerSelector);

	burger.addEventListener("click", () => {
		burgerMenu.style.display == "none" && document.documentElement.clientWidth <= 992 ? burgerMenu.style.display = "block" : burgerMenu.style.display = "none"
	});
	
	window.addEventListener("resize", () => {
		if (document.documentElement.clientWidth > 992) {
			burgerMenu.style.display = "none";
		}
	})
	
};


export default burger;