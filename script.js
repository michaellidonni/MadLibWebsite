let adjective1 = prompt("Name a adjective!");
let name = prompt("What is your name?");
let place = prompt("Name a place!");
let weapon = prompt("Name a weapon!");
let animal = prompt("Name a animal");
let item = prompt("Name and item!");
let adjective2 = prompt("Name a adjective!");
let pluralNoun = prompt("Name a plural noun!");
let adjective3 = prompt("Name a adjective!");
let verb = prompt("Name a verb!");
let place2 = prompt("Name a place!");
let animal2 = prompt("Name a animal!");
let verb2 = prompt("Name a verb!");
let adjective4 = prompt("Name a adjective!");

let myStory = `<p> One day, a ${adjective1} adventurer named ${name} decided to explore the mysterious ${place}. Armed with a trusty ${weapon} and a map, they set off on their journey. As they ventured deeper into the unknown, they suddenly encountered a ${animal} who offered them a ${item} in exchange for help. Together, they traveled through ${adjective2} forests, across vast ${pluralNoun}, and over towering ${adjective3} mountains. After days of ${verb}, they finally reached a place named ${place2} hidden in a ${adjective3} cave. But just as they were about to claim their prize, a fierce ${animal2} appeared and challenged them to a fight! With clever ${verb}, the adventurer won the challenge and claimed the ${item}. Victorious, they returned home, ready for their next ${adjective4} adventure.</p>`;

let title = `The Great Adventure of ${name}`;

document.getElementById("story").innerHTML = myStory;
document.getElementById("title").innerHTML = title;
