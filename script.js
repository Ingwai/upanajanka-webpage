//  navbar toggle
const openNavBtn = document.querySelector('.nav-open-btn');
const navbarMini = document.querySelector('.navbar-mini');

openNavBtn.addEventListener('click', () => {
	navbarMini.classList.toggle('active');
	openNavBtn.classList.toggle('active');
});

navbarMini.addEventListener('click', () => {
	navbarMini.classList.remove('active');
	openNavBtn.classList.toggle('active');
});

// oferta card

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
	card.addEventListener('click', () => {
		// przelatujemy pętla forEach po wszystkich kartach żeby usunąć wszytkie klasy active,
		// tylko zostawić na danej wybranej przez nas. Na wszystkich indeksach kart różnych od naszej wybranej karty usuwamy klasę active

		allCards = document.querySelectorAll('.back');
		allCards.forEach((el, indexEl) => {
			if (index !== indexEl) el.classList.remove('active');
		});
		// wybrana przez nas karta, nadajemy jej klasę active lub wyłaczamy klasę active
		cardBack = document.getElementsByClassName('back')[index];
		cardBack.classList.toggle('active');
	});
});

const header = document.querySelector('.header');
const goToTopBtn = document.querySelector('.go-top');

window.addEventListener('scroll', function () {
	if (window.scrollY >= 10) {
		header.classList.add('active');
		goToTopBtn.classList.add('active');
	} else {
		header.classList.remove('active');
		goToTopBtn.classList.remove('active');
	}
});

/**
 * Tab content
 */

const addEventOnElements = function (elements, eventType, callback) {
	for (let i = 0, len = elements.length; i < len; i++) {
		elements[i].addEventListener(eventType, callback);
	}
};

const tabBtns = document.querySelectorAll('[data-tab-btn]');
const tabContents = document.querySelectorAll('[data-tab-content]');

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {
	if (!(lastActiveTabBtn === this)) {
		lastActiveTabBtn.classList.remove('active');
		lastActiveTabContent.classList.remove('active');

		this.classList.add('active');
		lastActiveTabBtn = this;

		const currentTabContent = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);

		currentTabContent.classList.add('active');
		lastActiveTabContent = currentTabContent;
	}
};

addEventOnElements(tabBtns, 'click', filterContent);

// LAZY LOADING

const imageDivs = document.querySelectorAll('.image');

imageDivs.forEach(imageDiv => {
	const img = imageDiv.querySelector('img');
	function loaded() {
		imageDiv.classList.add('loaded');
	}

	if (img.complete) {
		loaded();
	} else {
		img.addEventListener('load', loaded);
	}
});

// SLIDER HERO

let index = 0;

function slider() {
	let slides = document.querySelectorAll('.hero_slide');

	slides.forEach(slide => {
		slide.style.opacity = '0';
		slide.style.scale = '0.8';
	});
	index++;
	index > slides.length ? (index = 1) : '';
	slides[index - 1].style.opacity = '1';
	slides[index - 1].style.scale = '1';
	setTimeout(slider, 15000);
}

slider();
