const iconGroup = document.querySelector('.icons-group');
const search = document.querySelector('form.search');
const addForm = document.querySelector('form.add');
const body = document.querySelector('body');
const comAllUncom = document.querySelector('.comp-uncomp');


const ul = document.querySelector('.list-group');


// functions ------------------------------------------------------------------------------------------------
const generateTemplate = todo => {
 const html = `
 <li
  class="list-group-item d-flex justify-content-between align-items-center my-1"
 >
  <span class="list-text text-dark">${todo}</span>
  <div class = "check-delete">
  <i class="bi bi-check2 check mx-2"></i>
  <i class="bi bi-trash-fill delete mx-2"></i>
  </div>
 </li>
 `

 ul.innerHTML += html;
}


const filterTodos = searchWord => {
 // console.log(Array.from(ul.children))

 Array.from(ul.children)
 .filter(todo => !todo.textContent.toLowerCase().includes(searchWord))
 .forEach(todo => todo.classList.add('d-none'))


 Array.from(ul.children)
 .filter(todo => todo.textContent.toLowerCase().includes(searchWord))
 .forEach(todo => todo.classList.remove('d-none'));

}


const completedFunc = () => {
 let newUlArray = Array.from(ul.children);
 
 newUlArray.forEach(todo => {


  if(todo.classList.contains('taskCompleted')){
   todo.classList.remove('d-none');
   todo.classList.add('d-flex');
  }else{
   todo.classList.remove('d-flex');
   todo.classList.add('d-none');
  }
 });

}


const allFunc = () => {
 let newUlArray = Array.from(ul.children);
 // console.log('sucess');
 newUlArray.forEach(todo => {
  if(todo.classList.contains('d-none')){
   todo.classList.remove('d-none');
   todo.classList.add('d-flex');
  }

 })


}

const uncompletedFunc = () => {
 console.log('works');
 let newUlArray = Array.from(ul.children);

 newUlArray.forEach(todo => {
  if(todo.classList.contains('taskCompleted')){
   todo.classList.remove('d-flex');
   todo.classList.add('d-none');
  }else{
   todo.classList.remove('d-none');
   todo.classList.add('d-flex');
  }
 })
}



// function part ends -----------------------------------------------------------------------------------------

// completed All uncompleted
comAllUncom.addEventListener('click', e=> {
 // console.log(e.target);

 if(e.target.classList.contains('completed')){
  // console.log('sucess');
  completedFunc();
 }else if(e.target.classList.contains('all')){
  // console.log('sucess but all');
  allFunc();
 }else if(e.target.classList.contains('uncompleted')){
  // console.log('sucess but uncompleted');
  uncompletedFunc();
 }
})



// show forms
iconGroup.addEventListener('click', e=> {
 e.preventDefault()
 // console.log(e.target.classList);

 if(e.target.classList.contains('bi-search')){
  search.classList.remove('d-none');
  addForm.classList.add('d-none');
 }else if(e.target.classList.contains('bi-plus')){
  addForm.classList.remove('d-none')
  search.classList.add('d-none')
 }

});


// deleteing content and checking content
ul.addEventListener('click', e => {
 if(e.target.classList.contains('delete')){
  e.target.parentElement.parentElement.remove();
 }else if(e.target.classList.contains('check')){


  e.target.parentElement.parentElement.classList.add('taskCompleted');
  e.target.parentElement.parentElement.classList.remove('d-flex');
  e.target.parentElement.parentElement.classList.add('d-none');
 }
})





// add content
addForm.addEventListener('submit', e => {
 e.preventDefault()
 const addText = addForm.add.value.trim();

 if(addText.length){
  generateTemplate(addText);
  addForm.reset();
 }
})


//search content
search.addEventListener('keyup', e=> {
 e.preventDefault();
 // console.log(search.search.value.trim());

 const searchWord = search.search.value.trim();
 filterTodos(searchWord);
})

