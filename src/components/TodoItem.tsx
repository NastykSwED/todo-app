import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

interface TodoItemProps {
	todo: TodoProps;
}

export const TodoItem = (props: TodoItemProps) => {
	const { todo } = props;

	const { name, description } = todo;

	const [isCompleted, setIsCompleted] = useState(false);

	const { handleDeleteTodo, handleUpdateTodo } = useContext(TodoContext);

	return (
		<div className='re-TodoItem'>
			<div className='re-TodoItem-wrapBodyText'>
				<h2
					className={`re-TodoItem-title ${isCompleted ? 'isCompleted' : ''} `}
				>
					{name}
				</h2>
				<p
					className={`re-TodoItem-description ${
						isCompleted ? 'isCompleted isCompleted--text' : ''
					} `}
				>
					{description}
				</p>
			</div>

			<div className='re-TodoItem-wrapButtons'>
				<button
					onClick={() => {
						setIsCompleted(!isCompleted);

						handleUpdateTodo(todo);
					}}
					className={`re-TodoItem-button TodoItem-button--completed`}
				>
					Complete
				</button>
				<button
					onClick={() => handleDeleteTodo(todo)}
					className='re-TodoItem-button TodoItem-button--deleted'
				>
					Delete
				</button>
			</div>
		</div>
	);
};
