import './Modal.css';

function Modal({ 
    modalVisibility,
    modalText,
    setModalText, 
    setModalVisibility, 
    addTodo
}) {
    return (
        <div className={`Modal-bg ${modalVisibility}`}>
            <form className='Modal-form'>
                <span onClick={() => setModalVisibility('Modal-hidden')} className='exit'>X</span>
                <h3>Agregar Nueva Tarea</h3>
                <input onChange={(e) => setModalText(e.target.value)} id='todo-text' type='text' placeholder='Nueva Tarea...' value={modalText} />
                <button onClick={(e) => addTodo(e, document.querySelector('#todo-text').value)} id='newTodo-btn'>AGREGAR</button>
            </form>
        </div>
    );
}

export { Modal };