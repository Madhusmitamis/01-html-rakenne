// 1.1header
const ylatunniste = document.createElement("header");
ylatunniste.className = ("ylatunniste");
//1.3 headerin otsikko 
const otsikko = document.createElement("h1");
const node1 = document.createTextNode("Tämä on artikkelin otsikko");
otsikko.appendChild(node1);
ylatunniste.appendChild(otsikko);
// 1.4headerin kappale 
const kappale1 = document.createElement("p");
const node2 = document.createTextNode("Ensimmäinen kappale! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam delectus officia voluptate nihil, dolorum soluta praesentium quae veniam veritatis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui iste nihil recusandae? Sint quibusdam quis iusto blanditiis cupiditate sapiente tempore.");
kappale1.appendChild(node2);
ylatunniste.appendChild(kappale1);

// 2 section 
const osa = document.createElement("section");
osa.setAttribute("id", "rinnakkain")

//2.1 sectionin kappale
const kappale2 = document.createElement("p");
const node3 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam delectus officia voluptate nihil, dolorum soluta praesentium quae veniam veritatis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui iste nihil recusandae? Sint quibusdam quis iusto blanditiis cupiditate sapiente tempore.");
kappale2.appendChild(node3);
//2.3 sectionin kuva
const raami = document.createElement("figure");
raami.setAttribute("id", "kuvanpaikka");
const kuva = document.createElement("img");
kuva.src = "./img/js-machine.gif";
raami.appendChild(kuva);


//2.3 lisätään sectionin lapset
osa.appendChild(kappale2);
osa.appendChild(raami);

//footer
const alatunniste = document.createElement("footer");
// footer kappale 
const kappale3 = document.createElement("P");
const node4 = document.createTextNode("@ 2024 Madhusmita Kumari");
kappale3.appendChild(node4);

//lisätään footerin lapsi
alatunniste.appendChild(kappale3);

// lisätään bodyn lapset
const runko = document.body;
runko.appendChild(ylatunniste);
runko.appendChild(osa);
runko.appendChild(alatunniste);


// const kappale3 = document.createElement("P");
// constnode4 = document.createTextNode("@ 2024 Madhu Kumari") ;

// kappale3.appendChild(node4);


// // 3.2 lisätään bodyn lapset
// alatunniste.appendChild(kappale3);

// const runko  = document.body;
// runko.appendChild(ylatunniste);
// runko.appendChild(osa);
// runko.appendChild(alatunniste)