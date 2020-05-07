const filter = () => {
	const menu = document.querySelector(".portfolio-menu"),
			wrapper = document.querySelector(".portfolio-wrapper"),
			portfolioNo = document.querySelector(".portfolio-no");

	menu.addEventListener("click", e => {
		if (e.target && e.target.tagName == "LI") {
			menu.querySelectorAll("li").forEach(item => {
				item.classList.remove("active");
			});
			e.target.classList.add("active");
			
			portfolioNo.style.display = "block";
			wrapper.querySelectorAll("div").forEach(card => {
				card.style.display = "none";
				card.classList.remove("animate", "fadeInUp");

				if (card.classList.contains(e.target.classList[0])) {
					portfolioNo.style.display = "none";
					card.style.display = "block";
					card.classList.add("animate", "fadeInUp");
				}
			});
		}
	})
};

export default filter;