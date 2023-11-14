const { todoList, addItem, removeItem, completeItem, getList } = require('../todo.js');

describe('Todo List', () => {
    beforeEach(() => {
        // Clear the todo list before each test
        while (getList().length) {
            removeItem(0);
        }
    });
    
    test('addItem should add a new item to the todo list', () => {
        const initialLength = todoList.length;
        addItem('Eat some Cheese');
        expect(todoList.length).toBe(initialLength + 1);
        expect(todoList[todoList.length - 1]).toBe('Eat some Cheese');
    });
    
    test('removeItem should remove an item from the todo list', () => {
        const initialLength = todoList.length;
        removeItem('Eat some Cheese');
        expect(todoList.length).toBe(initialLength - 1);
    });
    
    test('removeItem should not remove any item if index is out of bounds', () => {
        const initialLength = todoList.length;
        removeItem(-1);
        removeItem(initialLength);
        expect(todoList.length).toBe(initialLength);
    });
    test('addItem should not add an empty item to the todo list', () => {
        const initialLength = getList().length;
        addItem('');
        expect(getList().length).toBe(initialLength);
    });
    
    test('removeItem should not change the list if the index is negative', () => {
        addItem('New task');
        const initialLength = getList().length;
        removeItem(-1);
        expect(getList().length).toBe(initialLength);
    });
    
    test('removeItem should not change the list if the index is greater than the length of the list', () => {
        addItem('New task');
        const initialLength = getList().length;
        removeItem(initialLength);
        expect(getList().length).toBe(initialLength);
    });
});
