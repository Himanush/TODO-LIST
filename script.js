const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Input box is empty!!! Write Something");
    }
    else{
        // line1 - html element is created with tagname li and stored in variable li
        let li = document.createElement("li");
        // line2 - text added in input field is stored in li as innerHTML is used to get the HTML content of any HTML element
        li.innerHTML = inputBox.value;  
        //line3 - To display li under list container, appendChild adds a new child node to an existing parent node.
        listContainer.appendChild(li);

        // cross icon at the end
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //after the value is added the input box should be empty
    inputBox.value = "";
    // whenever any task is added we need to call the saveData inorder to save the new data in the browser. 
    saveData();
}

listContainer.addEventListener("click",function(e){
    // when clicked, it checks where we have clicked and if clicked target element is LI then it should add checked classname,if already checked classname is already there then it will remove the checked as toggle is added.
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        // will call saveData when we check or uncheck the task
        saveData(); 
    }
    // if clicked target element is span it will delete the parent element.The parent element is li element.So it'll remove the li element.So the task will be deleted.
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // will call saveData after deleting a task to update the data.
        saveData();
    }
},false);

function saveData(){
    // setItem stores the data entered in the browser with the name "data" and to get the data we can use getItem i.e localStorage.getItem("data").
    // The first parameter is the name and second parameter is value we want to save.here we want to save entire content in list container.
    // listContainer.innerHTML - gives whatever data is present in the list container.
      localStorage.setItem("data",listContainer.innerHTML);
}

// To display data whenever we open the website again

function showTask(){
    // This will give all the content that is stored in browser with name "data".
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();