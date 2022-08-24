var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var display = document.querySelector("#display");

submit.onclick= function(){
    if(!input.value){
        alert('please enter something')
    }else{
        var list= document.createElement('li')
        list.appendChild(document.createTextNode(input.value))
        display.appendChild(list)
        input.value=""
    }
}