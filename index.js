document.querySelector("#push").onclick = function (e) {

  e.preventDefault();
  if (document.querySelector("#addTodo").value.length == 0) {
    alert("addtask");
  } else {
    let value1 = document.getElementById("addTodo").value;
    let ul = document.getElementById("task");
    let li = document.createElement("li");
    li.setAttribute("data-todo", value1);
    li.innerHTML = `<div class="demo d-flex"><span class="text-dark bg-light mt-3 mr-3  w-100">${value1}</span><button onclick="completeTodoItem(event,'${value1}')" id="complete" class="btn btn-success ml-auto mt-3">Completed</button><button onclick="pendingTodoItem(event,'${value1}')" id="pending" class="btn btn-warning ml-auto mt-3">Pending</button><button onclick="deleteTodoItem(event,'${value1}')" id="delete" class="btn btn-danger ml-auto mt-3">Delete</button></div>`;
    ul.appendChild(li);
    document.getElementById("addTodo").value = "";
  }
};
// let ul2=document.getElementById("com");
// li.setAttribute("data-complete",value1);


// let ul2=document.getElementById("com");
// let li2=document.createElement("li");
// li2.setAttribute("data-complete",value1);
// li.innerHTML=`<div>class"demo1 d-flex><span class="text-dark bg-light mt-3 mr3 w-100">${value1}</div>`
function completeTodoItem(even,text,pending){
  even.preventDefault();
   console.log(pending);
  let ul2=document.getElementById("com");
  li2=document.createElement("li");
  li2.innerHTML = `<div class=" container bg-warning text-dark w-100">${text}</div>`
  ul2.appendChild(li2);
 if (pending){
  let ul3=document.getElementById("pen");
  var pendingitem=document.querySelector(`li[data-pending=${text}]`)
  ul3.removeChild(pendingitem)
}else{
  let ul=document.getElementById("task");
  var completeditem =document.querySelector(`li[data-todo=${text}]`)
 ul.removeChild(completeditem)
}
     

}
function pendingTodoItem (even,text){
  even.preventDefault();
  let ul3=document.getElementById("pen");
  li3=document.createElement("li");
  li3.setAttribute("data-pending",text)
  li3.innerHTML = `<div class=" container bg-warning text-dark w-100">${text}</div>`
  li3.innerHTML = `<div class="demo d-flex"><span class="text-dark bg-light mt-3 mr-3  w-100">${text}</span><button onclick="completeTodoItem(event,'${text}','true')" id="complete" 
  class="btn btn-success ml-auto mt-3">Completed</button></div>`
  
  var pendingitem=document.querySelector(`li[data-todo=${text}]`)
  
  ul3.appendChild(li3);
  let ul=document.getElementById("task");
  ul.removeChild(pendingitem)
  
  // li3.setAttribute("data-pending",text)
  // document.querySelector(`li[data-pending=${text}`).innerHTML=""
  // document.querySelector(`li[data-todo=${text}`).innerHTML=""
  
}

function deleteTodoItem(event, text) {
  event.preventDefault();
  // console.log(text);
  // event.target.parentNode.parentNode.remove();
  var del = document.querySelector(`li[data-todo=${text}]`);
  del.remove();
}
function deleteall() {
  let all = document.querySelectorAll(`li[data-todo]`);
  all.forEach((li) => li.remove());
  // console.log(all);
}
