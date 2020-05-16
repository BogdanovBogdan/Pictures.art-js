const checkTextInputs = (selector) => {
	const txtInputs = document.querySelectorAll(selector);

	txtInputs.forEach(input => {
		input.addEventListener("keypress", (e) => {
			if (e.key.match(/[^а-яё0-9 ]/ig)) {
				e.preventDefault();
				alert("Ввод возможен только на кириллице!")
			}
		});
		input.addEventListener("input", () => {
			if (input.value.match(/[^а-яё0-9 ]/ig)) {
				input.value = "";
				alert("Ввод возможен только на кириллице!")
			}
		});
	})
};

export default checkTextInputs;