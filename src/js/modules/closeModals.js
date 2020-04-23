const closeModals = () => {
	const allModals = document.querySelectorAll("[data-modal]");

	allModals.forEach(item => {
		item.style.display = "none";
		document.body.style.marginRight = "0px";
		document.body.style.overflow = "";
	});
};

export default closeModals;