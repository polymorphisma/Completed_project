const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');
// const deleteing = document.querySelector('.delete');


const generateTemplate = todo => {
 const html = `
 <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="bi bi-trash-fill delete"></i>
 </li>
 `;

 ul.innerHTML += html;
};



addForm.addEventListener('submit' , e => {
 e.preventDefault();
 const todo = addForm.add.value.trim();

 if(todo.length){
  generateTemplate(todo);
  addForm.reset();
 }


 // console.log(todo);
});


ul.addEventListener('click', e => {
 if(e.target.classList.contains('delete')){
  e.target.parentElement.remove();
 }
});

const filterTodos = term => {
 // console.log(Array.from(ul.children));
 Array.from(ul.children)
 .filter(todo =>!todo.textContent.toLowerCase().includes(term))
 .forEach(todo => todo.classList.add('d-none'));


 Array.from(ul.children)
 .filter(todo => todo.textContent.toLowerCase().includes(term))
 .forEach(todo => todo.classList.remove('d-none'));


}

search.addEventListener('keyup', e=> {
 // const searching = addForm.add.value.trim();
 const term = search.value.trim().toLowerCase();
 // console.log(term);
 filterTodos(term);

})

