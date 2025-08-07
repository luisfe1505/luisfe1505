/**
 * This file automatically creates the table of contents using JavaScript.
* This way, I don't have to write the table manually in HTML, and I can easily modify the courses.
* I use an array of objects for the courses and a loop to build the table.
 */

const courses = [
  
    { term: "Fall", code: "CSD105", name: "Python", hrs: 3 },
    { term: "Fall", code: "CMM115", name: "Communications I", hrs: 3 },
    { term: "Fall", code: "CSD120", name: "Introduction to Web Development", hrs: 4 },
    { term: "Fall", code: "CSO104", name: "Introduction to Operating Systems and LAN", hrs: 4 },
    { term: "Fall", code: "MTH122", name: "Computer Mathematics", hrs: 3 },
    { term: "Fall", code: "TNY130", name: "Technology in Society", hrs: 2 },
    { term: "Winter", code: "CSA103", name: "Business Applications I", hrs: 4 },
    { term: "Winter", code: "CSD102", name: "Programming Using C++", hrs: 5 },
    { term: "Winter", code: "CSD212", name: "Web Scripting Languages", hrs: 4 },
    { term: "Winter", code: "CSO102", name: "Introduction to Linux", hrs: 4 },
    { term: "Winter", code: "CST104", name: "PC Hardware and Networking", hrs: 5 }
];


const grouped = courses.reduce((acc, cur) => {
    acc[cur.term] = acc[cur.term] || [];
    acc[cur.term].push(cur);
    return acc;
}, {});

const table = document.createElement('table');
table.innerHTML = `
    <caption>Table 1. Current Courses</caption>
    <thead>
        <tr><th rowspan="2">Term</th>
            <th colspan="3">Course</th>
        </tr>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Hrs/Week</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
    <tfoot>
        <tr>
            <th colspan="3">Total</th>
            <td>${courses.reduce((sum, c) => sum + c.hrs, 0)}</td>
        </tr>
    </tfoot>
`;

const tbody = table.querySelector('tbody');
for (const term of Object.keys(grouped)) {
    grouped[term].forEach((course, idx) => {
        const tr = document.createElement('tr');
        if (idx === 0) {
            tr.innerHTML = `<th rowspan="${grouped[term].length}">${term}</th>`;
        }
        tr.innerHTML += `
            <td>${course.code}</td>
            <td>${course.name}</td>
            <td>${course.hrs}</td>
        `;
        tbody.appendChild(tr);
    });
}


const tableDiv = document.querySelector('div[id="making a table"]');
if (tableDiv) {
    tableDiv.innerHTML = '';
    tableDiv.appendChild(table);
}