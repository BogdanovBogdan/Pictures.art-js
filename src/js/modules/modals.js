import calcScroll from "./calcScrollWidth";
import closeModals from "./closeModals";

const modals = () => {
	const bindModals = (triggerSelector, modalSelector, closeSelector, closeOnClickOnOverlay = true, displayModal = "block") => {
		const triggers = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			scrollWidth = calcScroll();

		triggers.forEach(item => {
			item.addEventListener("click", () => {
				modal.style.display = displayModal;
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scrollWidth}px`;
			});
		});

		close.addEventListener("click", () => {
			closeModals()
		});

		modal.addEventListener("click", (e) => {
			if (e.target && closeOnClickOnOverlay && e.target == modal) {
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
	

	bindModals(".button-design", ".popup-design", ".popup-design .popup-close");
	bindModals(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close");
	bindModals(".fixed-gift", ".popup-gift", ".popup-gift .popup-close");
	// showModalByTime(".popup-consultation", 60000);
};


export default modals;