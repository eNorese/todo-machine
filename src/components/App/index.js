import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { TodoTitle } from '../TodoTitle';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal'
import defaultTodos from '../../data'

function App() {
    
    const [searchValue, setSearchValue] = useState('');
    const [todos, setTodos] = useState(defaultTodos);
    const [modalVisibility, setModalVisibility] = useState('Modal-hidden');
    const [modalText, setModalText] = useState('');

    const totalTodos = todos.length;
    const totalCompleted = todos.filter(todo => todo.completed).length;

    const deleteTodo = (todoId) => {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }

    const addTodo = (event, text) => {
        event.preventDefault();
        const updatedTodos = [...todos];
        const newTodo = { id: uuidv4(), text, completed: false };
        updatedTodos.push(newTodo);
        setTodos(updatedTodos);
        setModalVisibility('Modal-hidden');
        setModalText('');
    }

    const completeTodo = (todoId) => {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        const updatedTodos = [...todos];
        updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
        setTodos(updatedTodos);
    }
    

    let searchedTodos = [];
    if(searchValue.length === 0) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchText);
        });
    }

    return (
        <>
            <TodoTitle />
            <TodoCounter totalTodos={totalTodos} totalCompleted={totalCompleted} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>
                { searchedTodos.map(todo => (
                    <TodoItem
                        key={ todo.id }
                        text={ todo.text }
                        completed={ todo.completed }
                        onDelete={() => deleteTodo(todo.id)}
                        completeTodo={() => completeTodo(todo.id)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton setModalVisibility={setModalVisibility} />
            <Modal 
                addTodo={addTodo}
                modalText={modalText}
                setModalText={setModalText}
                modalVisibility={modalVisibility}
                setModalVisibility={setModalVisibility}
            />
        </>
    );
}

export default App;