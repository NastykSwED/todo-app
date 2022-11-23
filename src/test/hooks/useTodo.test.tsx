import { describe, expect, it, expectTypeOf } from 'vitest';

import { renderHook, act } from '@testing-library/react';

import { useTodo } from '../../hooks/useTodo';

describe('Testing useTodo Custom Hook', () => {
	it('Should return an object with a todo array and 3 handle functions', () => {
		const { result } = renderHook(() => useTodo());

		expectTypeOf(result.current).toBeObject();
	});

	it('Should return a empty todos array', () => {
		const { result } = renderHook(() => useTodo());

		const { todos } = result.current;

		expect(todos.length).toBe(0);
	});

	it('handleAddTodo should add and new todo', () => {
		const todoName = 'Learn ReactJS';
		const todoDescription = 'I want to learn this amazing framework';

		const { result } = renderHook(() => useTodo());

		const { handleAddTodo } = result.current;

		act(() => {
			handleAddTodo(todoName, todoDescription);
		});

		const { todos } = result.current;

		expect(todos.length).toBe(1);

		expect(todos[0].name).toBe(todoName);

		expectTypeOf(todos[0]).toEqualTypeOf<TodoProps>;
	});

	it('handleDeleteTodo should delete a todo', () => {
		const todoName = 'Learn ReactJS';
		const todoDescription = 'I want to learn this amazing framework';

		const { result } = renderHook(() => useTodo());

		const { handleAddTodo, handleDeleteTodo } = result.current;

		act(() => {
			handleAddTodo(todoName, todoDescription);
		});

		act(() => {
			handleDeleteTodo(result.current.todos[0]);
		});

		const { todos } = result.current;

		expect(todos.length).toBe(0);
	});

	it('handleUpdateTodo should update a todo', () => {
		const todoName = 'Learn ReactJS';
		const todoDescription = 'I want to learn this amazing framework';

		const { result } = renderHook(() => useTodo());
		const { handleAddTodo, handleUpdateTodo } = result.current;

		act(() => {
			handleAddTodo(todoName, todoDescription);
		});

		expect(result.current.todos[0].done).toBeFalsy();

		act(() => {
			handleUpdateTodo(result.current.todos[0]);
		});

		expect(result.current.todos[0].done).toBeTruthy();
	});
});
