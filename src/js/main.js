import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import showMoreStyles from "./modules/showMoreStyles";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";
	
	modals();
	slider(".feedback-slider-item", true, ".main-prev-btn", ".main-next-btn")
	slider(".main-slider-item", false);
	forms();
	showMoreStyles(".button-styles", ".styles-2");
});