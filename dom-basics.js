const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const section = document.createElement("section");
const h2 = document.createElement("h2");
h2.innerText = "Dom Basics";

section.appendChild(h2);
const p = document.createElement("p");
p.innerText = "This was added through JavaScript";
section.appendChild(p);
document.body.appendChild(section);