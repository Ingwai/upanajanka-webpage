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

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
	if (window.scrollY >= 10) {
		header.classList.add('active');
		goTopBtn.classList.add('active');
	} else {
		header.classList.remove('active');
		goTopBtn.classList.remove('active');
	}
});
