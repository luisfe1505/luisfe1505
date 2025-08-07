//This script dynamically generates the navigation menu. So, if I want to add or remove pages, I just have to change it here.

const nav = document.createElement('nav');
nav.innerHTML = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="links.html">Links</a></li>
        <li><a href="glossary.html">Glossary</a></li>
        <li><a href="survey.html">Survey</a></li>
    </ul>
`;

const header = document.querySelector('header#top');
header.appendChild(nav);