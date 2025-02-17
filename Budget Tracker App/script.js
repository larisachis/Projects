const addTransactionBtn = document.getElementById('addTransactionBtn');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const transactionList = document.getElementById('transactionList');
const totalDisplay = document.getElementById('total');

let total = 0;

// Adaugă tranzacție
addTransactionBtn.addEventListener('click', function() {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description === '' || isNaN(amount)) {
        alert('Te rog să completezi toate câmpurile!');
        return;
    }

    addTransactionToList(description, amount);
    updateTotal(amount);

    // Resetează câmpurile de input
    descriptionInput.value = '';
    amountInput.value = '';
});

// Funcție pentru a adăuga tranzacția în listă
function addTransactionToList(description, amount) {
    const li = document.createElement('li');
    li.textContent = `${description}: ${amount} RON`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Șterge';
    deleteBtn.addEventListener('click', function() {
        li.remove();
        updateTotal(-amount); // Scade suma total -= amount;
        totalDisplay.textContent = `Total: ${total} RON`;
    });

    li.appendChild(deleteBtn);
    transactionList.appendChild(li);
}

// Funcție pentru a actualiza totalul
function updateTotal(amount) {
    total += amount;
    totalDisplay.textContent = `Total: ${total} RON`;
}