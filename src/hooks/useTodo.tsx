import { useReducer } from 'react';

import toast from 'react-hot-toast';

import {
	todoReducer,
	todoTypes,
	initialTodoState,
	init,
} from '../reducers/todoReducer';

export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialTodoState, init);

	const notifyTodoAdded = () => toast.success('Todo Added');
	const notifyTodoDeleted = () => toast.success('Todo Deleted');
	const notifyTodoUpdate = () => toast.success('Todo Updated');
	const notifyTodoErrorAdded = () => toast.error('Add a Name and Description');

	const handleAddTodo = (
		inputNameValue: string,
		inputDescriptionValue: string
	) => {
		if (inputNameValue && inputDescriptionValue) {
			dispatch({
				type: todoTypes.AddTodo,
				payload: {
					id: Date.now(),
					done: false,
					name: inputNameValue,
					description: inputDescriptionValue,
				},
			});

			notifyTodoAdded();
		} else {
			notifyTodoErrorAdded();
		}
	};

	const handleUpdateTodo = (todo: TodoProps) => {
		dispatch({
			type: todoTypes.UpdateTodo,
			payload: { ...todo, done: true },
		});
		notifyTodoUpdate();
	};

	const handleDeleteTodo = (todo: TodoProps) => {
		dispatch({
			type: todoTypes.DeleteTodo,
			payload: { ...todo },
		});

		notifyTodoDeleted();
	};

	return { todos, handleAddTodo, handleUpdateTodo, handleDeleteTodo };
};
