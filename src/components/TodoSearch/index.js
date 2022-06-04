import './TodoSearch.css';

function TodoSearch() {
    return (
        <section className='TodoSearch-Container'>
            <input className='TodoSearch' type='text' placeholder='Buscar tarea' />
        </section>
    );
}

export { TodoSearch };