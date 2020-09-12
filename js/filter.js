function ShowCategories(category) {
    let articles = document.getElementsByClassName('article');
    let years = document.getElementsByClassName('year');
    let categoryName = document.getElementById('categoryName');
    let i;

    if (category == ''){
        for (i = 0; i < articles.length; i++) {
            articles[i].classList.remove('hideArticle')
        }

        for (i = 0; i < years.length; i++) {
            years[i].classList.remove('hideArticle')
        }
        categoryName.classList.add('hideArticle')
        categoryName.innerHTML = "";

    }
    else{
        for (i = 0; i < articles.length; i++) {
            articles[i].classList.add('hideArticle')
        }

        for (i = 0; i < years.length; i++) {
            years[i].classList.add('hideArticle')
        }

        articles = document.getElementsByClassName(category);
        for (i = 0; i < articles.length; i++) {
            articles[i].classList.remove('hideArticle')
        }

        categoryName.classList.remove('hideArticle')
        categoryName.innerHTML = '#' + category;
    }
}