const todolist = [{
  name: 'Make sandwich',
  dueDate: '2024-2-26'
  },
  {
    name: 'Make Bed',
    dueDate: '2024-2-23'
  }];

renderTodolist();

function renderTodolist(){
  let todolistHtml = '';

  todolist.forEach(function (todoObject, index){
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button class="delete-button"
    onclick="todolist.splice(${index}, 1);renderTodolist()">Delete
    </button>
    `;

    todolistHtml += html;
  });

  console.log(todolistHtml);
  document.querySelector('.js-container').innerHTML = todolistHtml;
}


function Add(){
  const inputElement = document.querySelector('.js-input-button');

  const name = inputElement.value;

  const inputDate = document.querySelector('.js-date-input');
  const dueDate = inputDate.value;

  todolist.push({name, dueDate});
  console.log(todolist);

  inputElement.value = '';

  renderTodolist();
}