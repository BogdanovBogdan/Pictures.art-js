const mask = (selector) => {

	const setCursorPosition = (pos, elem) => {
		elem.focus();

		if (elem.setSelectionRange) {
			if (elem.selectionStart < 3) {
				elem.setSelectionRange(pos, pos);
			} else {
				elem.setSelectionRange(pos, pos);
			}
		} else if (elem.createTextRange) {
			let range = elem.createTextRange();

			range.collapse(true);
			range.moveEnd("character", pos);
			range.moveStart("character", pos);
			range.select();
		}
	};


	function createMask(event) {
		let matrix = "+7 (___) ___ __ __",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, (symbol) => {
			return /[_\d]/.test(symbol) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : symbol;
		});

		if (event.type === "blur") {
			if (this.value.length == 2) this.value = '';
		} else {
			setCursorPosition(this.value.length, this);
		}

	}

	let inputs = document.querySelectorAll(selector);

	inputs.forEach(input => {
		["input", "focus", "blur"].forEach(evenName => {
			input.addEventListener(evenName, createMask);
		});

		["click", "keyup"].forEach(eventName => {
			input.addEventListener(eventName, function () {
				setCursorPosition(this.value.length, this);
			});
		});
	});
};

export default mask;
