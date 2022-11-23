import { describe, expect, it, vi } from 'vitest';

import { screen, render, fireEvent } from '@testing-library/react';

import { TodoAdd } from '../../components';

import { TodoContext } from '../../contexts/TodoContext';

describe('Testing TodoAdd Component', () => {
	const value = {
		todos: [],
		handleAddTodo: vi.fn(),
		handleDeleteTodo: vi.fn(),
		handleUpdateTodo: vi.fn(),
	};

	it('Should match the snapshot', () => {
		const { container } = render(
			<TodoContext.Provider value={value}>
				<TodoAdd></TodoAdd>
			</TodoContext.Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('The todo name input should be empty', () => {
		render(
			<TodoContext.Provider value={value}>
				<TodoAdd></TodoAdd>
			</TodoContext.Provider>
		);

		const todoNameInput = screen.getByPlaceholderText(
			'Todo Name'
		) as HTMLInputElement;
		const emptyValue = '';

		expect(todoNameInput.value).toBe(emptyValue);
	});

	it('A new value should be added to the todo name input', () => {
		render(
			<TodoContext.Provider value={value}>
				<TodoAdd></TodoAdd>
			</TodoContext.Provider>
		);

		const todoNameInput = screen.getByPlaceholderText(
			'Todo Name'
		) as HTMLInputElement;

		const newInputValue = 'Learn ReactJS';

		fireEvent.change(todoNameInput, {
			target: {
				value: newInputValue,
			},
		});

		expect(todoNameInput.value).toBe(newInputValue);
	});

	it('The todo description input should be empty', () => {
		render(
			<TodoContext.Provider value={value}>
				<TodoAdd></TodoAdd>
			</TodoContext.Provider>
		);

		const todoDescriptionInput = screen.getByPlaceholderText(
			'Todo Description'
		) as HTMLInputElement;
		const emptyValue = '';

		expect(todoDescriptionInput.value).toBe(emptyValue);
	});

	it('A new value should be added to the todo description input', () => {
		render(
			<TodoContext.Provider value={value}>
				<TodoAdd></TodoAdd>
			</TodoContext.Provider>
		);

		const todoDescriptionInput = screen.getByPlaceholderText(
			'Todo Name'
		) as HTMLInputElement;

		const newInputValue = 'I want to learn this amazing framework';

		fireEvent.change(todoDescriptionInput, {
			target: {
				value: newInputValue,
			},
		});

		expect(todoDescriptionInput.value).toBe(newInputValue);
	});

	it('The todo name input and the todo description input should be enter when we add a todo', () => {
		render(
			<TodoContext.Provider value={value}>
				<TodoAdd></TodoAdd>
			</TodoContext.Provider>
		);

		const todoNameInput = screen.getByPlaceholderText(
			'Todo Name'
		) as HTMLInputElement;

		const todoDescriptionInput = screen.getByPlaceholderText(
			'Todo Description'
		) as HTMLInputElement;

		const emptyValue = '';

		const newNameInputValue = 'Learn ReactJS';
		const newDescriptionInputValue = 'I want to learn this amazing framework';

		fireEvent.change(todoNameInput, {
			target: {
				value: newNameInputValue,
			},
		});

		fireEvent.change(todoDescriptionInput, {
			target: {
				value: newDescriptionInputValue,
			},
		});

		fireEvent.click(screen.getByRole('button'));

		expect(todoNameInput.value).toBe(emptyValue);

		expect(todoDescriptionInput.value).toBe(emptyValue);
	});
});
