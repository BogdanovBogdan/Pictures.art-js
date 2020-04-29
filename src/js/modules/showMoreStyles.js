const showMoreStyles = (trigger, cardsSelector) => {
	const btn = document.querySelector(trigger),
		cards = document.querySelectorAll(cardsSelector);

	btn.addEventListener("click", ()=> {
		cards.forEach(card => {
			card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
			card.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
		})
		btn.remove();
	});
}

export default showMoreStyles;