window.addEventListener('DOMContentLoaded', () => {
	const quote = document.querySelector('.quote');
	const author = document.querySelector('.author');
	const getBtn = document.querySelector('.btn');

	function getRandomId(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const getRandomQuote = id => {
		fetch(`https://dummyjson.com/quotes/${id}`)
			.then(res => res.json())
			.then(data => {
				quote.textContent = data.quote;
				author.textContent = data.author;
			});
	};

	getBtn.addEventListener('click', () => {
		const randomId = getRandomId(1, 30);
		getRandomQuote(randomId);
	});
});
