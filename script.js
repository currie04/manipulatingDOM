const container = document.querySelector("#container");


/*adding the red paragraph */

const red_p = document.createElement("p");
red_p.classList.add("red_p");
red_p.textContent = "Hey I'm red";

container.appendChild(red_p);
red_p.style.color = "red";

/*adding the blue h3 */

const blue_h3 = document.createElement("h3");
blue_h3.classList.add("blue_h3");
blue_h3.textContent = "I'm a blue h3!";

container.appendChild(blue_h3);
blue_h3.style.color = "blue";

/* the div - black and pink */

const new_div = document.createElement("div");
new_div.classList.add("new_div");

container.appendChild(new_div);

new_div.style.backgroundColor = "pink";
new_div.style.border = "4px solid black";

/* children of the div */

const h1_child = document.createElement("h1");
h1_child.classList.add("h1_child");
h1_child.textContent = "I'm in a div"; 

new_div.appendChild(h1_child);

const p_child = document.createElement("p");
p_child.classList.add("p_child");
p_child.textContent = "ME TOO!";

new_div.appendChild(p_child);