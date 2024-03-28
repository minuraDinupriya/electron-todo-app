const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function() {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const text = document.createTextNode(todoInput.value);

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.classList.add('btn', 'btn-success', 'btn-sm', 'ms-3', 'float-right');
    doneBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.appendChild(text);
    li.appendChild(doneBtn);

    todoList.appendChild(li);
    todoInput.value = '';
});
