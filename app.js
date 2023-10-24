let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", function() {

    let li = document.createElement("li");
    li.innerText = inp.value;
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("delete");
    li.appendChild(dltbtn);

    ul.appendChild(li);
    inp.value = " ";
});
ul.addEventListener("click", function(event) {

    if (event.target.nodeName == "BUTTON") {
        let item = event.target.parentElement;
        item.remove();
    }



})