{
    'use strict';

    const titleClickHandler = function () {
        console.log('Link was clicked!');
        console.log(event);

        /* remove class 'active' from all article links  */
        const activeLinks = document.querySelectorAll('.titles a.active');

        for (let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        }
        /* add class 'active' to the clicked link */
        event.preventDefault();
        const clickedElement = this;
        clickedElement.classList.add('active');
        console.log('clickedElement:', clickedElement);

        /* remove class 'active' from all articles */
        const activeArticles = document.querySelectorAll('.posts article.active');

        for (let activeArticle of activeArticles) {
            activeArticle.classList.remove('active');
        }

        /* get 'href' attribute from the clicked link */
        const articleSelector = clickedElement.getAttribute('href');
        console.log(articleSelector);

        /* find the correct article using the selector (value of 'href' attribute) */
        const targetArticle = document.querySelector(articleSelector);
        console.log(targetArticle);

        /* add class 'active' to the correct article */
        setTimeout(function () { targetArticle.classList.add('active') }, 1500);

    }

    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles',
        optArticleTagsSelector = '.post-tags .list',
        optArticleAuthorSelector = '.post-author';


    function generateTitleLinks(customSelector = '') {

        /* remove contents of titleList */
        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = '';

        /* for each article */
        const articles = document.querySelectorAll(optArticleSelector + customSelector);

        let html = '';

        for (let article of articles) {

            /* get the article id */
            const articleId = article.getAttribute('id');

            /* find the title element */
            const articleTitle = article.querySelector(optTitleSelector).innerHTML;

            /* create HTML of the link */
            const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
            console.log(linkHTML);

            html = html + linkHTML;
        }
        /* insert link into titleList */
        titleList.innerHTML = html;

        const links = document.querySelectorAll('.titles a');
        console.log(links);

        for (let link of links) {
            link.addEventListener('click', titleClickHandler);
        }
    }

    generateTitleLinks();
   
    function generateTags(){
        /* find all articles */
        const articles = document.querySelectorAll(optArticleSelector);
        /* START LOOP: for every article: */
        for (let article of articles) {
          /* find tags wrapper */
          const tagsWrapper = article.querySelector(optArticleTagsSelector);
          /* make html variable with empty string */
          let html = '';
          /* get tags from data-tags attribute */
          const articleTags = article.getAttribute('data-tags');
          console.log(articleTags);
          /* split tags into array */
          const articleTagsArray = articleTags.split(' ');
          console.log(articleTagsArray);
          /* START LOOP: for each tag */
          for(let tag of articleTagsArray) {
            /* generate HTML of the link */
            const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
            /* add generated code to html variable */
            html = html + linkHTML;
          /* END LOOP: for each tag */
            }
          /* insert HTML of all the links into the tags wrapper */
          tagsWrapper.innerHTML = html;
        /* END LOOP: for every article: */
      }
    }

    generateTags();

    function tagClickHandler(event){
      /* prevent default action for this event */
      event.preventDefault();
      /* make new constant named "clickedElement" and give it the value of "this" */
      clickedElement = this;
      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('href');
      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = href.replace('#tag-', '');
      /* find all tag links with class active */
      const activeTagLink = document.querySelectorAll('a[href="' + href + '"]');
      /* START LOOP: for each active tag link */
      for (link of activeTagLink) {
        /* remove class active */
        link.classList.remove('active');
      /* END LOOP: for each active tag link */
      }
      /* find all tag links with "href" attribute equal to the "href" constant */
      const foundTagLinks = document.querySelectorAll('a[href="' + href + '"]');
      /* START LOOP: for each found tag link */
        for (foundLink of foundTagLinks) {
        /* add class active */
        foundLink.classList.add('active');
      /* END LOOP: for each found tag link */
      }
      /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
    } 
    
    function addClickListenersToTags(){
      /* find all links to tags */
      const tagLinks = document.querySelectorAll('a[href^="#tag-"]')
      /* START LOOP: for each link */
      for (let link of tagLinks) {
        /* add tagClickHandler as event listener for that link */
        link.addEventListener('click', tagClickHandler);
      /* END LOOP: for each link */
      }
    }
    
    addClickListenersToTags();

    function generateAuthors(){
      /* find all articles */
      const articles = document.querySelectorAll(optArticleSelector);
      /* START LOOP: for every article: */
      for (let article of articles) {
        /* find tags wrapper */
        const tagsWrapper = article.querySelector(optArticleAuthorSelector);
        /* make html variable with empty string */
        let html = '';
        /* get tags from data-tags attribute */
        const author = article.getAttribute('data-author');
        /* generate HTML of the link */
        const linkHTML = '<a href="#author-' + author + '">' + author + '</a>';
        /* add generated code to html variable */
        html = html + linkHTML;
        /* insert HTML of all the links into the tags wrapper */
        tagsWrapper.innerHTML = html;
      /* END LOOP: for every article: */
    }
  }

  generateAuthors();

  function authorClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "author" and extract author from the "href" constant */
    const author = href.replace('#author-', '');
    /* find all author links with class active */
    const activeAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each active author link */
    for (link of activeAuthorLinks) {
      /* remove class active */
      link.classList.remove('active');
    /* END LOOP: for each active author link */
    }
    /* find all author links with "href" attribute equal to the "href" constant */
    const foundAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found author link */
      for (foundLink of foundAuthorLinks) {
      /* add class active */
      foundLink.classList.add('active');
    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author~="' + author + '"]');
  } 
  
  function addClickListenersToAuthors(){
    /* find all links to tags */
    const authorLinks = document.querySelectorAll('a[href^="#author-"]')
    /* START LOOP: for each link */
    for (let link of authorLinks) {
      /* add tagClickHandler as event listener for that link */
      link.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
    }
  }
  
  addClickListenersToAuthors();
}
