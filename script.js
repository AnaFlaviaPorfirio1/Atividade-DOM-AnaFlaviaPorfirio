// Seletores do DOM
const taskForm = document.getElementById( 'taskForm' );
const taskInput = document.getElementById( 'taskInput');
const taskList = document.getElementById( 'taskList');

// função que cria um <li> com texto e botão "Remover"
function createTaskItem(texto) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    const deleteBnt = document.createElement('button');
    deleteBnt.textContent = 'Remover';
    deleteBnt.className = 'delete-bnt';
    deleteBnt.type = 'button';
    li.appendChild(span);
    li.appendChild(deleteBnt);
    return li;
}

// Captura do submit
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;
    const li = createTaskItem(text);
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
});