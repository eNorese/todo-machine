import todos from '../../data'
import { TodoTitle } from '../TodoTitle';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function App() {
    const totalTodos = todos.length;
    const totalCompleted = todos.filter(todo => todo.completed).length;
    console.log(totalTodos);
    console.log(totalCompleted);

    return (
        <>
            <TodoTitle />
            <TodoCounter totalTodos={ totalTodos } totalCompleted={ totalCompleted } />
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

            {/* <CreateTodoButton /> */}
        </>
    );
}

export default App;