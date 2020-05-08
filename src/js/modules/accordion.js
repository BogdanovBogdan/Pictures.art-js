const accordion = () => {
	const tabs = document.querySelectorAll(".accordion-heading");

	tabs.forEach(tab => {
		tab.addEventListener("click", function() {
			tabs.forEach(item => {
				item.classList.remove("ui-accordion-header-active");
				item.nextElementSibling.style.maxHeight = "0px";
				item.nextElementSibling.classList.remove("ui-accordion-content-active");
			});
			
			this.classList.toggle("ui-accordion-header-active");
			this.nextElementSibling.classList.add("ui-accordion-content-active");
			
			if (this.classList.contains("ui-accordion-header-active")) {
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
			} else {
				this.nextElementSibling.style.maxHeight = "0px";
				this.nextElementSibling.classList.remove("ui-accordion-content-active");
			}
		});
	});
};

export default accordion;