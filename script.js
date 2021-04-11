const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

var contador=0
var contadorChecks=0
function subirContadorElementos(){
  contador++
  contadorChecks++
  itemCountSpan.innerText=contador
  uncheckedCountSpan.innerText=contadorChecks

}
function contarChecks(event){
  if(event.target.checked){
    contadorChecks--;
  }else{
    contadorChecks++;
  }
  uncheckedCountSpan.innerText=contadorChecks
}
function addTodo() {
 var texto=prompt('Boton Add TODO clickeado!')
 var li= document.createElement("li");
 li.className=classNames.TODO_ITEM
 var input=document.createElement("input")
 input.type="checkbox"
 input.className= classNames.TODO_CHECKBOX
 var span = document.createElement("span")
 span.className=classNames.TODO_TEXT
 span.innerText=texto
 input.onchange=contarChecks
 li.append(input)
 li.append(span)
 list.appendChild(li);
 subirContadorElementos()
}
