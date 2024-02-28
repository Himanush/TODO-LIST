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
}