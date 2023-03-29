

function add(){
	let cont=document.querySelector(".container");
	let a=document.createElement("span");
	a.innerText="AlexRaja";
	a.classList.add("content","text","example");
	cont.appendChild(a);
}

function remove(){
	let content=document.querySelector(".container1");
	let b=document.querySelector("span");
	b.classList.remove("example");
	content.appendChild(b);
}

let content1=document.querySelector(".container2");
let c=document.createElement("span");
	c.setAttribute("id","text");
	c.innerHTML="hello";
	content1.appendChild(c);

	function toggle(){
		document.getElementById("text").classList.toggle("content");
	}