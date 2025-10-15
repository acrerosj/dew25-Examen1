function getTitleArticles() {
    return [...document.querySelectorAll('article h3')].map(h3 => h3.textContent);
}

function changeClassTitleArticles(newClass) {
    document.querySelectorAll('article h3').forEach(
        h3 => h3.classList.add(newClass)
    );
}

function getTitleArticlesClass(hasClass) {
    //return [...document.querySelectorAll('article.' + hasClass + ' h3')].map(h3 => h3.textContent);
    return [...document.querySelectorAll(`article.${hasClass} h3`)].map(h3 => h3.textContent);
}

function changeURL(oldDomain, newDomain) {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        //console.log(link.href);
        //console.log(link.href.replace(oldDomain, newDomain));
        link.href = link.href.replace(oldDomain, newDomain);
    });
}

function changeOrder() {
    let articles = [...document.querySelectorAll('article')];
    articles.reverse();
    console.log(articles);
    const section = document.querySelector('section#proyectos-container');
    articles.forEach( article =>  section.append(article));
}

function removeArticlesClass(hasClass) {
    let toRemove = [...document.querySelectorAll(`article.${hasClass}`)];
    toRemove.forEach(article => article.remove() );
}