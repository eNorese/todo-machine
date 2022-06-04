import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = event => {
        setSearchValue(event.target.value);
    }
    
    return (
        <section className='TodoSearch-Container'>
            <input
                className='TodoSearch'
                type='text'
                placeholder='Buscar tarea'
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </section>
    );
}

export { TodoSearch };