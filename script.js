const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputBox.value === ''){
        alert("Write something!!"); //if the input box is empty, the error message will appear
    }

    else{

        let li = document.createElement("li"); // store element in the coument
        li.innerHTML = inputBox.value; // store text inside li
        listContainer.appendChild(li); //display li in list-container
        
        //use to clear textbox after add
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //cross icon code
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();


}


listContainer.addEventListener("click", function(e){
    
    if(e.target.tagName === "LI") // if click on LI
    {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN") // if click on span
    {
        e.target.parentElement.remove();
        saveData();
    }


    }, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}