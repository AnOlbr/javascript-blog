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
        optArticleTagsSelector = '.post-tags .list';


    function generateTitleLinks() {

        /* remove contents of titleList */
        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = '';

        /* for each article */
        const articles = document.querySelectorAll(optArticleSelector);

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
            console.log(html);
          /* END LOOP: for each tag */
            }
          /* insert HTML of all the links into the tags wrapper */
          tagsWrapper.innerHTML = html;
        /* END LOOP: for every article: */
      }
    }
    generateTags();
      
    function addClickListenersToTags(){
        /* find all links to tags */
      
        /* START LOOP: for each link */
      
          /* add tagClickHandler as event listener for that link */
      
        /* END LOOP: for each link */
      }
      
      addClickListenersToTags();


}

