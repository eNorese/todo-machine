import todos from '../../data'
import { TodoTitle } from '../TodoTitle';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function App() {
    return (
        <>
            <TodoTitle />
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                { todos.map(todo => (
                    <TodoItem
                        key={ todo.id }
                        text={ todo.text }
                        completed={ todo.completed }
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;