count = 0;

function createNotes(noteTitle, noteBody) {
    count += 1;

    document.getElementById("empty-jotts").classList.add("hidden");

    let li = document.createElement("li");
    let a= document.createElement("a");
    let p = document.createElement("p");
    let h2 = document.createElement("h2");
    let xButton = document.createElement("button");

    xButton.classList.add("delete");

    let xBut = document.createTextNode("X");
    let h2Jott = document.createTextNode(noteTitle);
    let pJott = document.createTextNode(noteBody);

    h2.appendChild(h2Jott);
    p.appendChild(pJott);
    xButton.appendChild(xBut);

    a.appendChild(h2);
    a.appendChild(xButton);
    a.appendChild(p);
    a.setAttribute("href", "#");

    li.appendChild(a);

    document.getElementById("jotts").appendChild(li);
}

function createNewJotting (e){
    e.preventDefault();

    let noteTitle = document.getElementById("new-title").value;
    let noteBody = document.getElementById("new-jotts").value;

    document.getElementById("new-title").value = "";
    document.getElementById("new-jotts").value = "";

    createNotes(noteTitle, noteBody);
}

function removeJotts (e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Delete jotting from archive?")) {
            let li = e.target.parentElement.parentElement;
            let ul = document.getElementById("jotts");

            ul.removeChild(li);
        }
    }

    count -= 1;
    if (count < 1) {
        document.getElementById("empty-jotts").className = "";
    }
}

document
.getElementById("inputForm")
.addEventListener("submit", createNewJotting, false);

document
.getElementById("jotts")
.addEventListener("click", removeJotts, false);