let count =Number(window.localStorage.getItem("count"));

if (!count) {
    window.localStorage.setItem("count", "0");
}

function createNotes(noteTitle, noteBody) {
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

    count += 1;
    window.localStorage.setItem("count", count);

    while (window.localStorage.getItem(noteTitle)) {
        noteTitle += " - 1";
    }
    window.localStorage.setItem(noteTitle, noteBody);

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
    window.localStorage.setItem("count", count);

    window.localStorage.removeItem(e.target.previousElementSibling.innerText);

    if (count < 1) {
        document.getElementById("empty-jotts").className = "";
    }
}

for (i = 0; i < count + 1; i++){
    let noteTitle = window.localStorage.key(i);
    let noteBody = window.localStorage.getItem(noteTitle);

    if (noteTitle !== "count" && noteTitle) {
        createNotes(noteTitle, noteBody);
    }
    
}

document
.getElementById("inputForm")
.addEventListener("submit", createNewJotting, false);

document
.getElementById("jotts")
.addEventListener("click", removeJotts, false);
