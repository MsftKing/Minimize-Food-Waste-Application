let inventory = [];

function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemQuantity = parseInt(document.getElementById("inputQuantity").value);

    if (itemName && itemQuantity > 0) {
        const item = { name: itemName, quantity: itemQuantity };
        inventory.push(item);
        displayInventory();
    } else {
        alert("Please enter a valid item name and quantity");
    }
}

function removeItem() {
    const itemName = document.getElementById("itemName").value;

    if (itemName) {
        inventory = inventory.filter(item => item.name !== itemName);
        displayInventory();
    } else {
        alert("Please enter a valid item name to remove");
    }
}

function displayInventory() {
    const inventoryList = document.getElementById("inventoryItems");
    inventoryList.innerHTML = '';

    inventory.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: ${item.quantity}`;
        inventoryList.appendChild(listItem);
    });
}
