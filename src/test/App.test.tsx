import { describe, expect, it, vi } from 'vitest';

import { screen, render } from '@testing-library/react';

import { useTodo } from '../hooks/useTodo';

import App from '../App';

describe('Testin TodoApp', () => {
	vi.mock('../hooks/useTodo');

	const handleAddTodoMock = vi.fn();
	const handleDeleteTodoMock = vi.fn();
	const handleUpdateTodoMock = vi.fn();

	it('The Todo Appmust be rendered correctly ', () => {
		vi.mocked(useTodo).mockReturnValue({
			todos: [
				{
					id: 1,
					name: 'Learn ReactJS',
					description: 'I want to learn this amazing framework',
					done: false,
				},
				{
					id: 2,
					name: 'Learn Svelte',
					description: 'I want to learn this amazing framework',
					done: true,
				},
				{
					id: 3,
					name: 'Learn Vue',
					description: 'I want to learn this amazing framework',
					done: false,
				},
			],
			handleAddTodo: handleAddTodoMock,
			handleDeleteTodo: handleDeleteTodoMock,
			handleUpdateTodo: handleUpdateTodoMock,
		});

		render(<App />);

		expect(screen.getByText('Learn ReactJS')).toBeTruthy();
		expect(screen.getByText('Learn Svelte')).toBeTruthy();
		expect(screen.getByText('Learn Vue')).toBeTruthy();
	});
});
