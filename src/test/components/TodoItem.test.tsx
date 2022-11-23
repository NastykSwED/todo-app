import { describe, it, expect, vi } from 'vitest';

import { screen, render, fireEvent } from '@testing-library/react';

import { TodoItem } from '../../components';

import { TodoContext } from '../../contexts/TodoContext';

describe('Testing TodoItem Component', () => {
	const handleAddTodoMock = vi.fn();
	const handleDeleteTodoMock = vi.fn();
	const handleUpdateTodoMock = vi.fn();

	const value = {
		todos: [
			{
				id: 1,
				name: 'Learn ReactJS',
				description: 'I want to learn this amazing framework',
				done: false,
			},
		],
		handleAddTodo: handleAddTodoMock,
		handleDeleteTodo: handleDeleteTodoMock,
		handleUpdateTodo: handleUpdateTodoMock,
	};

	it('The complete should be completed', () => {
		render(
			<TodoContext.Provider value={value}>
				<TodoItem todo={value.todos[0]} />
			</TodoContext.Provider>
		);

		fireEvent.click(screen.getByText('Complete'));

		expect(handleUpdateTodoMock).toHaveBeenCalledWith(value.todos[0]);
	});

	it('The todo should be removed', () => {
		render(
			<TodoContext.Provider value={value}>
				<TodoItem todo={value.todos[0]} />
			</TodoContext.Provider>
		);

		fireEvent.click(screen.getByText('Delete'));

		expect(handleDeleteTodoMock).toHaveBeenCalledWith(value.todos[0]);
	});
});
