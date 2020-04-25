const slider = (slides, horizontalDir, prev, next) => {
	const allSlides = document.querySelectorAll(slides);

	let slideIndex = 1,
		 animation;

	function showSlide(n) {
		if (n > allSlides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = allSlides.length;
		}

		allSlides.forEach(item => {
			item.classList.add("animated");
			item.style.display = "none";
		});

		allSlides[slideIndex - 1].style.display = "block";
	}

	showSlide(slideIndex);

	function plusSlide(n) {
		showSlide(slideIndex += n);
	}

	try {
		const prevBtn = document.querySelector(prev),
			nextBtn = document.querySelector(next);

		prevBtn.addEventListener("click", () => {
			plusSlide(-1);
			allSlides[slideIndex - 1].classList.remove("slideInRight");
			allSlides[slideIndex - 1].classList.add("slideInLeft");
		});

		nextBtn.addEventListener("click", () => {
			plusSlide(1);
			allSlides[slideIndex - 1].classList.remove("slideInLeft");
			allSlides[slideIndex - 1].classList.add("slideInRight");
		});
	} catch (error) {}

	function activateAnimation() {
		if (horizontalDir) {
			animation = setInterval(() => {
				plusSlide(1)
				allSlides[slideIndex - 1].classList.remove("slideInLeft");
				allSlides[slideIndex - 1].classList.add("slideInRight");
			}, 4000);
		} else {
			animation = setInterval(() => {
				plusSlide(1)
				allSlides[slideIndex - 1].classList.add("slideInDown");
			}, 4000);
		};
	};

	activateAnimation();

	allSlides[0].parentNode.addEventListener("mouseenter", () => {
		clearInterval(animation);
	});
	allSlides[0].parentNode.addEventListener("mouseleave", () => {
		activateAnimation();
	});
};

export default slider;