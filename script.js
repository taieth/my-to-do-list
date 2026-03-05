const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function savetasks() {
    const tasks = [];
    document.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.querySelector('.task-text').textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('mytasks', JSON.stringify(tasks));
}


function createtask(text, iscompleted = false) {
    const li = document.createElement('li');
    if (iscompleted) li.classList.add('completed');
    
    li.innerHTML = `
        <div class="task-content">
            <div class="custom-checkbox">
                <svg class="checkmark" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <span class="task-text">${text}</span>
        </div>
        <button class="delete-btn">×</button>
    `;

    todoList.appendChild(li);


    li.querySelector('.task-content').addEventListener('click', () => {
        li.classList.toggle('completed');
        savetasks();
    });


    li.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
        savetasks();
    });
}


window.addEventListener('load', () => {
    const saved = JSON.parse(localStorage.getItem('mytasks') || '[]');
    saved.forEach(task => createtask(task.text, task.completed));
});


addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText !== "") {
        createtask(taskText);
        savetasks();
        todoInput.value = "";
        todoInput.style.height = "auto";
    } else {
        alert("Write down your goal first, bro.");
    }
});


todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        addBtn.click();
    }
});


todoInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});