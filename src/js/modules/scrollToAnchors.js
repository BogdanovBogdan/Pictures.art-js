const scrollToAnchors = () => {
	const anchors = document.querySelectorAll("a[href*='#']");

	anchors.forEach(anchor => {
		anchor.addEventListener("click", function(e) {
			e.preventDefault();
			const blockId = document.querySelector(this.getAttribute("href"));

			blockId.scrollIntoView({
				behavior: 'smooth' // this parametr not supported in IE, Safari
			});
		});
	});
};

export default scrollToAnchors;