const dragAndDrop = () => {
	const fileInputs = document.querySelectorAll("[name='upload']");

	["dragleave", "dragenter", "dragover", "drop"].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, preventDefaults);
		});
	});

	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	const highligh = (uploadArea) => {
		uploadArea.style.borderRadius = "25px";
		uploadArea.style.boxShadow = "0px 0px 0px 3px yellow";
		uploadArea.style.background = "rgba(165, 40, 178, 0.2)";
	}

	const unhighligh = (uploadArea) => {
		uploadArea.style.boxShadow = "";
		uploadArea.style.background = "transparent";
	}

	["dragenter", "dragover"].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => highligh(input.closest(".file_upload")));
		});
	});

	["dragleave", "drop"].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => unhighligh(input.closest(".file_upload")));
		});
	});

	fileInputs.forEach(input => {
		input.addEventListener("drop", e => {
			input.files = e.dataTransfer.files;

			let fullName = input.files[0].name.split('.'),
				dots;
			fullName[0].length > 6 ? dots = "..." : dots = ".";
			let shortName = fullName[0].substring(0, 6) + dots + fullName[1];
			input.previousElementSibling.textContent = shortName;
		})
	});
};


export default dragAndDrop;