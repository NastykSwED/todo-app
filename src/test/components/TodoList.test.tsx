import { describe, expect, it, vi } from 'vitest';

import { screen, render, fireEvent } from '@testing-library/react';

import { TodoList } from '../../components';

import { TodoContext } from '../../contexts/TodoContext';

describe('Testing TodoList Component', () => {
	const value: TodoContextProps = {
		todos: [],
		handleAddTodo: vi.fn(),
		handleDeleteTodo: vi.fn(),
		handleUpdateTodo: vi.fn(),
	};

	it('Should return the TodoList with the TodoEmpty Component', () => {
		render(
			<TodoContext.Provider value={value}>
				<TodoList></TodoList>
			</TodoContext.Provider>
		);

		expect(screen.getByText('No Todos')).toBeTruthy();
	});

	it('Should deploy a single todo,', () => {
		const todos: TodoProps[] = [
			{
				id: 1,
				name: 'Learn ReactJS',
				description: 'I want to learn this amazing framework',
				done: true,
			},
		];

		value.todos = todos;

		render(
			<TodoContext.Provider value={value}>
				<TodoList></TodoList>
			</TodoContext.Provider>
		);

		expect(screen.getByText(todos[0].name)).toBeTruthy();

		expect(screen.getByText(todos[0].description)).toBeTruthy();
	});
});
