import './CreateTodoButton.css';

function CreateTodoButton({ setModalVisibility }) {
    return (
        <span onClick={() => setModalVisibility('Modal-visible')} className='CreateTodoButton'>+</span>
    );
}

export { CreateTodoButton };