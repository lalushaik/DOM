var body=document.getElementById("root");
console.log(body);
var container=document.createElement("div");
container.setAttribute("class","container")
body.appendChild(container);
var row=document.createElement("div");
row.setAttribute("class","row mt-5 p-5")
container.appendChild(row);
var card1 = document.createElement("div");
card1.setAttribute("class","col-md-4");
row.appendChild(card1);
var card = document.createElement("div");
card.setAttribute("class","card text-center");
card1.appendChild(card);
var image = document.createElement("img");
image.setAttribute("class","card-img-top");
image.src="./images/woman.svg";
image.alt="Profile Image";
card.appendChild(image);
// h3 for name
var name1=document.createElement("h3");
name1.textContent="Lalu shaik";
card.appendChild(name1);
var desig=document.createElement("p");
desig.textContent="ReactJS Trainee";
card.appendChild(desig);
card.appendChild(document.createElement("hr"));
//create email
var email=document.createElement("p");
email.textContent="lalushaik1995@gmail.com";
card.appendChild(email);
//create phone number
var mobile=document.createElement("p");
mobile.textContent="9988776655";
card.appendChild(mobile);
var area = document.createElement("p");
area.textContent="Hyderabad";
card.appendChild(area);
//create resume part
var resume = document.createElement("div");
resume.setAttribute("class","offset-md-1 col-md-7");
resume.setAttribute("id","resumepart");
row.appendChild(resume);
var name1=document.createElement("h5");
name1.textContent="Lalu shaik";
resume.appendChild(name1);
var email=document.createElement("p");
email.textContent="lalushaik1995@gmail.com";
resume.appendChild(email);
//create phone number
var mobile=document.createElement("p");
mobile.textContent="9988776655";
resume.appendChild(mobile);
resume.appendChild(document.createElement("hr"));
var career =document.createElement("h4");
career.textContent="CAREER OBJECTIVE";
resume.appendChild(career);
var career1=document.createElement("p");
career1.textContent="Actively looking for job profiles that best match my key skills in an organization that honors my performance and challenges me to think about how work can be done more effectively to meet desired expectations.";
resume.appendChild(career1);
var professional =document.createElement("h4");
professional.textContent="PROFESSIONAL SUMMARY";
resume.appendChild(professional);
var list = document.createElement("ul");
resume.appendChild(list);
var listItem = document.createElement("li");
listItem.textContent = "1+ years of experience as an Angular Developer.";
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = "1+ years of experience as an UI Developer.";
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = "Good Understanding of Overall web design including basic usability, accessibility and navigation.";
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = "Experience in Editing and Updating the CSS files";
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = "Hands on Experience in Responsive Web Designing with bootstrap, j-Query, JavaScript and Angular";
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = "Knowledge in creating Single Page Application (SPA) using Angular.";
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = "Take task ownership and have a strong desire to learn.";
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = "Able to quickly grasp new concepts, incorporate innovations and stay up to date with industry and business directions.";
list.appendChild(listItem);
var experience =document.createElement("h4");
experience.textContent="EXPERIENCE SUMMARY";
resume.appendChild(experience);
var list = document.createElement("ul");
resume.appendChild(list);
var listItem = document.createElement("li");
listItem.textContent = "Working as, Angular Developer in LOGIC MIND, Hyderabad from April 2019 to till date.";
list.appendChild(listItem);
var listItem = document.createElement("li");
listItem.textContent = "Worked as UI Developer in LOGIC MIND, Hyderabad from Feb 2018 to Mar 2019.";
list.appendChild(listItem);
var TECHNOLOGICAL =document.createElement("h4");
TECHNOLOGICAL.textContent="TECHNOLOGICAL SKILLS";
resume.appendChild(TECHNOLOGICAL);
var table = document.createElement("table");
resume.appendChild(table);
var tr =document.createElement("tr");
table.appendChild(tr);
var td =document.createElement("td");
td.textContent = "Front End Tools";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = ":";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = "Angular and Boot Strap";
tr.appendChild(td);
var tr =document.createElement("tr");
table.appendChild(tr);
var td =document.createElement("td");
td.textContent = "Web Development";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = ":";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = "HTML5, CSS3, Java Script, JQuery and Basics of Photoshop.";
tr.appendChild(td);
var tr =document.createElement("tr");
table.appendChild(tr);
var td =document.createElement("td");
td.textContent = "Web Hosting";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = ":";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = "CPanel and Github.";
tr.appendChild(td);
var tr =document.createElement("tr");
table.appendChild(tr);
var td =document.createElement("td");
td.textContent = "Applications	";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = ":";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = "MS-Office";
tr.appendChild(td);
var tr =document.createElement("tr");
table.appendChild(tr);
var td =document.createElement("td");
td.textContent = "Tools & IDEs";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = ":";
tr.appendChild(td);
var td =document.createElement("td");
td.textContent = "Visual studio, Visual studio Code and Notepad++.";
tr.appendChild(td);
var EDUCATION =document.createElement("h4");
EDUCATION.textContent="EDUCATION";
resume.appendChild(EDUCATION);
var row=document.createElement("div");
row.setAttribute("class","row")
row.setAttribute("id","educationDetails")
resume.appendChild(row);
var card1 = document.createElement("div");
card1.setAttribute("class","col-md-5");
row.appendChild(card1);
var education1 =document.createElement("h6");
education1.textContent="JNTU – KAKINADA UNIVERSITY";
card1.appendChild(education1);
var card1 = document.createElement("div");
card1.setAttribute("class","col-md-7");
row.appendChild(card1);
var education2 =document.createElement("p");
education2.textContent="Bachelor’s Degree in Electrical and Electronics - 2016";
card1.appendChild(education2);
var sign =document.createElement("h6");
sign.setAttribute("class","text-right");
sign.textContent="(Lalu Shaik)";
resume.appendChild(sign);





