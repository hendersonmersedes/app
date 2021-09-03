
    consttextfieldInput = document.getElementById("todoinputfield");
constinputTextField= document.getElementById('addtaskcontainerid');
const list = document.querySelector('ul');
var editClicked= false;
var listElement= '';
/**Added keyup listener to show and hide of delete icon if text is available or not*/
textfieldInput.addEventListener("keyup", function() {
    constnameInput =textfieldInput.value;
    if (nameImput != "") {
        document.getElementById('cancelBtnId').className="deleteIconsContainer";
    }
});

/**This method is to show the input text field on click of Add Task button */

function showInputText(){
    var cardView= document.getElementById('todoitemslist');
    this.noDataFound();
    inputTextfield.style.display = 'block';
    cardView.style.margin = '60px';
}

/**noDataDound method is to show some text when list items are empty */

function noDataFound(){
    var defaultText=
    document.getElementsByClassName('noDataFound')
    [0];
    defaultText.style.display ="none";
}

function clearText(){
    let inputValue = document.getElementById
    ("myInput").value;
    if (inputValue ===''){
        alert("No text to clear!");
    } else {
        document.getElementById("myInput").value='';
    }
}

/**This method is to add the entered text on imput textfield */

function createTodo(){
    if (editClicked){
        this.editedData();
        editClicked=false;
        return ;
    }

    var inputValue= document.getElementById
    ("todoinputfield").value;
    if (inputValue ===''){
     return ;
 }
    var li= document.createElement("li"),
    randomID=Math.floor(Date.now() /1000), //
    Math.random().toString(36).substr(2,9);
    divElement='';
    this.addDeleteandEditBtn(li);
    divElement=document.createElement("DIV");
    divElement.innerHTML= inputValue;
    divElement.className="cardViewInput";
    li.id=randomID;
    li.appendChild(divElement);

    document.getElementById
    ("todoitemslist").appendChild(li);
    li.className="card";

    if(inputValue.length !=0){
        var itemsArray= localStorage.getItem('cardItems')?JSON.parse(localStorage.getItem
            ('card.Items')) : [];
            itemsArray.push({
                text: inputValue,
                id: randomID

            });
            localStorage.setItem('cardItems', JSON.stringify(itemsArray));
    }   
    document.getElementById("todoinputfield").value="";

}
