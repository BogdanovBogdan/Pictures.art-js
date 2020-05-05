const calc = (sizeSelector, materialSelector, optionsSelector, promoSelector, resultSelector) => {
	const size = document.querySelector(sizeSelector),
			material = document.querySelector(materialSelector),
			options = document.querySelector(optionsSelector),
			promo = document.querySelector(promoSelector),
			result = document.querySelector(resultSelector);

	let sum = 0;

	const calcFunc = () => {
		
		sum = Math.round(+size.value * +material.value + +options.value); 
		
		console.log('size.value = ', Boolean(size.value));
		if (!size.value || !material.value) {
			console.log('result = ', result);
			result.textContent = "Пожалуйста, выберите размер и материал картины";
		} else if (promo.value === "IWANTPOPART") {
			result.textContent = sum * 0.7;
		} else {
			result.textContent = sum;
		}
	};

	size.addEventListener("change", calcFunc);
	material.addEventListener("change", calcFunc);
	options.addEventListener("change", calcFunc);
	promo.addEventListener("input", calcFunc);
}

export default calc;