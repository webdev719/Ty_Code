// To Do List App JS

// Variables
var addbtn = document.getElementById('add-btn');
var tdinput = document.getElementById('todo-input');
var list = document.getElementById('list');

// Add Item Event Listener
addbtn.addEventListener('click', function() {
    // If Input Field Is Empty
    if (tdinput.value == '' || tdinput.value == null) {
        item.style.display = 'none';
        itemText.style.display = 'none';
        editInput.style.display = 'none';
        actionBtns.style.display = 'none';
    } // Else Add Fields/Buttons/Info
    else {
        // Add Value To List
        var todo = tdinput.value;
        // List Div Info
        var item = document.createElement('DIV');
        item.classList.add('item');
        var itemText = document.createElement('DIV');
        itemText.classList.add('item-text');
        itemText.textContent = todo;        
        // Edit Input Field
        var editInput = document.createElement('INPUT');
        editInput.classList.add('edit-input');
        editInput.classList.add('hide');
        editInput.name = 'edit-input';
        editInput.type = 'text';
        editInput.value = todo;
        // Edit Input Field Button
        var editInputBtn = document.createElement('BUTTON');
        editInputBtn.textContent = 'Update';
        editInputBtn.classList.add('action-btn');
        editInputBtn.classList.add('update-btn');
        editInputBtn.classList.add('hide');
        editInputBtn.type = 'button';
        // Action Buttons
        var actionBtns = document.createElement('DIV');
        actionBtns.classList.add('action-btns');
        // Edit To Do List Items
        var editBtn = document.createElement('BUTTON');
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function() {
            editInput.classList.remove('hide');
            itemText.classList.add('hide');
            editInputBtn.classList.remove('hide');
            editInputBtn.addEventListener('click', function() {
                itemText.textContent = editInput.value;
                editInput.classList.add('hide');
                itemText.classList.remove('hide');
                editInputBtn.classList.add('hide');
            });
        });
        // Remove To Do List Items
        var removeBtn = document.createElement('BUTTON');
        removeBtn.classList.add('action-btn');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Delete';
        removeBtn.addEventListener('click', function() {
            item.parentNode.removeChild(item);
        });
        // Add Action Buttons To Items
        actionBtns.append(editInputBtn);
        actionBtns.append(editBtn);
        actionBtns.append(removeBtn);
        item.append(itemText);
        item.append(editInput);
        item.append(actionBtns);
        list.append(item);
    }
    // Clear 'Add Item' Field When Item Added
    tdinput.value = '';
});