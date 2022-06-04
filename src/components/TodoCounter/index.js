import './TodoCounter.css';

function TodoCounter({ totalTodos, totalCompleted }) {
    return (
        <h2 className='TodoCounter'>{`Has completado ${totalCompleted} de ${totalTodos} tareas`}</h2>
    );
}

export { TodoCounter };