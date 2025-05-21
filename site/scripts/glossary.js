// Array with my glossary terms and their descriptions
const glossaryEntries = [
    {
        term: "Script",
        description: "Is a tag used to add or run JavaScript code inside a webpage."
    },
    {
        term: "JavaScript",
        description: "Is a programming language that adds interactivity to your site, such as buttons that react to clicks, dynamic content, forms, animations, etc."
    },
    {
        term: "Semantic elements",
        description: "Clearly describe their meaning to both the browser and developers."
    },
    {
        term: "Meta tags",
        description: "Define metadata like character set and viewport settings."
    },
    {
        term: "Favicons",
        description: "Defines the small icon displayed in browser tabs."
    }
];


const main = document.getElementById("creating-a-glossary");


main.innerHTML = "";

// Create the main heading for the glossary
const heading = document.createElement("h1");
heading.textContent = "Glossary";
main.appendChild(heading);

// Create the description list element
const dl = document.createElement("dl");

// Loop through my glossary entries and add them to the list
glossaryEntries.forEach(entry => {
    const dt = document.createElement("dt");
    dt.textContent = entry.term + ":";
    const dd = document.createElement("dd");
    dd.textContent = entry.description;
    dl.appendChild(dt);
    dl.appendChild(dd);
});

// Add the description list to the main element
main.appendChild(dl);