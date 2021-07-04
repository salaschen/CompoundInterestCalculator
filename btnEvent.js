
var id = 1;

// Create node 
const addElement = (type) => {
    let name = document.createElement(type);
    return name;
}
// Create <label> node with for attribute
const addLabel = (txt, i) => {
    
    let forId = "input" + id + i;
    let label = addElement("LABEL");
    let t = document.createTextNode(txt);
    label.setAttribute("for", forId);
    label.appendChild(t);
    return label;
}
// Create <label> node with attributes
const addInput = (i) => {
    let inputId = "input" + id + i;
    let input = addElement("INPUT");
    input.setAttribute("id", inputId);
    input.setAttribute("inputmode", "numeric");
    input.setAttribute("type", "text");
    input.setAttribute("aria-required", "true");
    return input;
}
// Create the node pair of <label> and <input>
const addPair = (txt, i) => {
    
    let div = addElement("DIV");
    let label = addLabel(txt, i);
    let input = addInput(i);
    div.appendChild(label);
    div.appendChild(input);

    return div;
}
// Create the node block of 2 pairs with className
const addBlock = () => {
    let block = addElement("DIV");   
    let pair1 = addPair("additional contribution", "a");
    let pair2 = addPair("year", "b");
    block.appendChild(pair1);
    block.appendChild(pair2);
    block.classList.add("flex");

    return block;
}
// Create the documentFragment
const addContainer = () => {
    let form = document.getElementById("form");
    let div1 = addElement("DIV");
    let div2 = addElement("DIV");
    let div3 = addBlock();    
    let header = addElement("H3");
    let t = document.createTextNode("Additional Contribution Strategy");

    header.classList.add("col100");
    header.appendChild(t);
    div2.classList.add("additionalStrategy");
    div2.appendChild(header);
    div2.appendChild(div3);
    div1.appendChild(div2);
    form.appendChild(div1);
}

const confirmBtn = () => {
    if (document.getElementById("form").childElementCount < 2)// validate whether the time of additional investments reachs 2
     {
        addContainer();
        id ++;
    } else {
        chart();
    }
}




// <button onclick="myFunction()">Try it</button>
// <div id="form"></div>
// <div id="footer"></div>

{/* <div class="flex">
    <div class="input yourStrategy">
        <h3 class="col100"> Your strategy </h3>
        <p>
            <label for="input1">Add deposit1:</label>
            <input id="input1" inputmode="numeric" type="text" aria-required="true" />
        </p>
        <p>
            <label for="input2">Add deposit2:</label>
            <input id="input2" inputmode="numeric" type="text" aria-required="true" />
        </p>
    </div>
</div> */}






