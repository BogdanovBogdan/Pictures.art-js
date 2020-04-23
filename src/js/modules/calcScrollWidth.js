const calcScroll = () => {
	const calcBox = document.createElement("div");

	calcBox.style.width = "50px";
	calcBox.style.height = "50px";
	calcBox.style.visibility = "hidden";
	calcBox.style.overflowY = "scroll";
	document.body.appendChild(calcBox);

	let widthScroll = calcBox.offsetWidth - calcBox.clientWidth;
	calcBox.remove();
	
	return widthScroll;
};

export default calcScroll;