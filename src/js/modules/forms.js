import {postData} from "../services/requests";

const forms = () => {
	const forms = document.querySelectorAll("form"),
		inputs = document.querySelectorAll("input"),	 
		textAreas = document.querySelectorAll("textarea"),
		upload = document.querySelectorAll("[name=upload]");

	const clearFields = () => {
		inputs.forEach(item => {
			item.value = '';
			item.checked = false;
		})
		textAreas.forEach(item => {
			item.value = '';
		});
		upload.forEach(item => {
			item.previousElementSibling.textContent = "Файл не выбран";
		})
	};

	upload.forEach(item => {
		item.addEventListener("input", () => {
			let fullName = item.files[0].name.split('.'),
				 dots;

			fullName[0].length > 6 ? dots = "..." : dots = ".";
			let shortName = fullName[0].substring(0, 6) + dots + fullName[1];

			item.previousElementSibling.textContent = shortName;
		});
	});

	let path = {
		designer: "assets/server.php",
		question: "assets/question.php"
	};

	const message = {
		loading: "Загрузка...",
		success: "Спасибо, мы скоро вам ответим",
		failure: "Ошибка отправки данных, повторите позже...",
		loadingImg: "assets/img/spinner.gif",
		successImg: "assets/img/ok.png",
		failureImg: "assets/img/fail.png"
	}

	

	forms.forEach(form => {
		form.addEventListener("submit", (e) => {
			e.preventDefault();

			const statusMessage = document.createElement("div");
			statusMessage.classList.add("status-message", "animated", "fadeInUp");
			form.parentNode.appendChild(statusMessage);

			form.classList.add("animated", "fadeOutUp");
			form.style.position = "absolute";
			setTimeout(() => {
				form.style.display = "none";
			}, 1000);

			const imgMessage = document.createElement("img");
			imgMessage.setAttribute("src", message.loadingImg);
			statusMessage.appendChild(imgMessage);

			const textMessage = document.createElement("div");
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			const formData = new FormData(form);
			if (form.classList.contains("calc_form")) {
				formData.append("price", form.querySelector(".calc-price").innerHTML);
			};
			
			let api;
			form.closest(".popup-design") || form.classList.contains("calc_form") ? api = path.designer : api = path.question;
			console.log(api);
			

			postData(api, formData)
				.then(res => {
					console.log('forms:postData[res] = ', res);
					imgMessage.setAttribute("src", message.successImg);
					textMessage.textContent = message.success;
				})
				.catch(() => {
					imgMessage.setAttribute("src", message.failureImg);
					textMessage.textContent = message.failure;
				})
				.finally(() => {
					clearFields();
					setTimeout(() => {
						statusMessage.remove();
						form.style.position = "static";
						form.style.display = "block";
						form.classList.remove("fadeOutUp");
						form.classList.add("fadeInDown");
					}, 3000);
				})
		});
	})
};

export default forms;