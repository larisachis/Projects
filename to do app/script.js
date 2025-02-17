document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    // Verifică dacă câmpul de input este gol
    if (taskText === '') {
        alert('Te rog să introduci o sarcină!');
        return;
    }

    // Creează un element de listă (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Creează un buton de ștergere
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Șterge';
    
    // Adaugă un eveniment pentru a șterge sarcina
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // Adaugă butonul de ștergere la elementul de listă
    li.appendChild(deleteBtn);
    
    // Adaugă elementul de listă la lista de sarcini
    document.getElementById('taskList').appendChild(li);
    
    // Resetează câmpul de input
    taskInput.value = '';
}); 