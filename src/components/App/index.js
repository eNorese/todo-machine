import { useState } from 'react';
import defaultTodos from '../../data'
import { TodoTitle } from '../TodoTitle';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function App() {
    
    const [searchValue, setSearchValue] = useState('');
    const [todos, setTodos] = useState(defaultTodos);

    const totalTodos = todos.length;
    const totalCompleted = todos.filter(todo => todo.completed).length;

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }

    return (
        <>
            <TodoTitle />
            <TodoCounter totalTodos={ totalTodos } totalCompleted={ totalCompleted } />
            <TodoSearch searchValue={ searchValue } setSearchValue={ setSearchValue } />

            <TodoList>
                { todos.map(todo => (
                    <TodoItem
                        key={ todo.id }
                        text={ todo.text }
                        completed={ todo.completed }
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;