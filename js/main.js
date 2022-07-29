let article = 1;
const showArticle = (n) => {
	let articles = document.querySelectorAll('.articles-card');
	if (n < 1 || n > articles.length) article = 1;
	for (let i = 0; i < articles.length; i++)
		articles[i].style.display = 'none';
	articles[article - 1].style.display = 'block';
};
showArticle(article);
const nextArticle = (n) => showArticle((article += n));
