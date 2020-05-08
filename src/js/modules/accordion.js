const accordion = () => {
	const tabs = document.querySelectorAll(".accordion-heading"),
			tabContents = document.querySelectorAll(".accordion-block");

	tabContents.forEach(item => {
		item.classList.add("animated", "fadeInDown");
	});

	tabs.forEach(tab => {
		tab.addEventListener("click", () => {
			tabs.forEach(item => {
				item.classList.remove("ui-accordion-header-active");
			});

			tab.classList.add("ui-accordion-header-active");
		});
	})
};

export default accordion;