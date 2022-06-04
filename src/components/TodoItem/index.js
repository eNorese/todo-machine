import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <span className='Icon Icon-delete'>
                <FontAwesomeIcon icon={ faCircleCheck } color={ props.completed && 'green' } />
            </span>

            <p className='TodoItem-p'>{ props.text }</p>

            <span className='Icon Icon-check'>
                <FontAwesomeIcon icon={ faTrash } />
            </span>
        </li>
    );
}

export { TodoItem };