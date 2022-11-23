import { TodoContext } from './TodoContext';

import { useTodo } from '../hooks/useTodo';

import { useEffect } from 'react';

interface TodoProviderProps {
	children: React.ReactNode;
}

export const TodoProvider = (props: TodoProviderProps) => {
	const { children } = props;

	const { todos, handleAddTodo, handleUpdateTodo, handleDeleteTodo } =
		useTodo();

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const value = {
		todos,
		handleAddTodo,
		handleDeleteTodo,
		handleUpdateTodo,
	};

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
