import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import showMoreStyles from "./modules/showMoreStyles";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import calc from "./modules/calc";
import filter from "./modules/filter";
import sizesPicture from "./modules/sizesPicture";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrollToAnchors from "./modules/scrollToAnchors";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";
	
	modals();
	slider(".feedback-slider-item", true, ".main-prev-btn", ".main-next-btn")
	slider(".main-slider-item", false);
	forms();
	showMoreStyles(".button-styles", "#styles .row");
	mask("[name='phone']");
	checkTextInputs("[name='name']");
	checkTextInputs("[name='message']");
	calc("#size", "#material", "#options", ".promocode", ".calc-price");
	filter();
	sizesPicture(".sizes-block");
	accordion();
	burger(".burger-menu", ".burger");
	scrollToAnchors();
});