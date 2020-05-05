import calcScroll from "./calcScrollWidth";
import closeModals from "./closeModals";

const modals = () => {
	let btnPressed = false;
	const bindModals = (triggerSelector, modalSelector, closeSelector, destroyTrigger = false, displayModal = "block") => {
		const triggers = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			allModals = document.querySelectorAll("[data-modal]"),
			scrollWidth = calcScroll();

		allModals.forEach(item => {
			item.classList.add("animated", "fadeIn");
		});

		triggers.forEach(item => {
			item.addEventListener("click", (e) => {
				if (e.trigger) {
					e.preventDefault();
				}
				
				btnPressed = true;
				 
				if (destroyTrigger) {
					item.remove();
				}
				
				modal.style.display = displayModal;
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scrollWidth}px`;
			});
		});

		close.addEventListener("click", () => {
			closeModals()
		});

		modal.addEventListener("click", (e) => {
			if (e.target && e.target == modal) {
				closeModals()
			};
		});

	}

	const showModalByTime = (modalSelector, timeout) => {
		const scrollWidth = calcScroll(),
			allModals = document.querySelectorAll("[data-modal");

		setTimeout(() => {
			let isDisplay;

			allModals.forEach(item => {
				if (getComputedStyle(item).display != "none") {
					isDisplay = true;
				}
			});

			if (!isDisplay) {
				document.querySelector(modalSelector).style.display = "block";
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scrollWidth}px`;
			}
		}, timeout);
	};

	const showModalByEndPage = (modalSelector) => {
		let isOpened = false;

		window.addEventListener("scroll", () => {
			let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

			if (!isOpened && !btnPressed && pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
				document.querySelector(modalSelector).click();
				isOpened = true;
			};
			
			
		});

	}


	bindModals(".button-design", ".popup-design", ".popup-design .popup-close");
	bindModals(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close");
	bindModals(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
	showModalByTime(".popup-consultation", 60000);
	showModalByEndPage(".fixed-gift");
};


export default modals;