import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <span className='Icon'>
                <FontAwesomeIcon onClick={props.completeTodo} className='Icon-check' icon={ faCircleCheck } color={ props.completed ? '#009D10' : 'gray' } />
            </span>

            <p className='TodoItem-p'>{ props.text }</p>

            <span className='Icon' onClick={props.onDelete}>
                <FontAwesomeIcon className='Icon-delete' icon={ faTrash } color='gray' />
            </span>
        </li>
    );
}

export { TodoItem };