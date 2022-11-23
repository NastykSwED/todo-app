import { TodoEmpty, TodoItem } from './';

import { useContext } from 'react';

import { TodoContext } from '../contexts/TodoContext';

export const TodoList = () => {
	const { todos } = useContext(TodoContext);

	return (
		<div className='re-TodoList'>
			{todos.length > 0 ? (
				todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
			) : (
				<TodoEmpty />
			)}
		</div>
	);
};
