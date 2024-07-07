let count = 0;

function updateCounter() {
    document.getElementById('counter').innerText = count;
}

function createButtons() {
    const buttonsContainer = document.getElementById('buttons');
    buttonsContainer.innerHTML = ''; // Clear previous buttons

    for (let i = 0; i < 1; i++) {  // Only creating one increment and one decrement button
        const incrementButton = document.createElement('button');
        incrementButton.innerText = '+';
        incrementButton.onclick = () => {
            count++;
            updateCounter();
        };

        const decrementButton = document.createElement('button');
        decrementButton.innerText = '-';
        decrementButton.onclick = () => {
            count--;
            updateCounter();
        };

        buttonsContainer.appendChild(decrementButton);
        buttonsContainer.appendChild(incrementButton);
    }
}

createButtons();
