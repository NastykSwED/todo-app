import { describe, it, expect } from 'vitest';

import { todoReducer, todoTypes } from '../../reducers/todoReducer';

describe('Testing todoReducer', () => {
	const initialState = [
		{
			id: 1,
			name: 'Learn ReactJS',
			description: 'I want to learn this amazing framework',
			done: false,
		},
	];

	it('Should return the initial state', () => {
		const newState = todoReducer(initialState, {} as actionProps);

		expect(newState).toBe(initialState);
	});

	it('Should add a new todo', () => {
		const action: actionProps = {
			type: todoTypes.AddTodo,
			payload: {
				id: 2,
				description: 'New Todo',
				name: 'New Todo #2',
				done: false,
			},
		};

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(2);
		expect(newState).toContain(action.payload);
	});

	it('Should remove the first todo', () => {
		const initialState = [
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
				done: false,
			},
		];

		const action: actionProps = {
			type: todoTypes.DeleteTodo,
			payload: initialState[0],
		};

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(1);
		expect(newState.includes(initialState[0])).toBeFalsy();
	});

	it('Should update the todo', () => {
		const action: actionProps = {
			type: todoTypes.UpdateTodo,
			payload: initialState[0],
		};

		const newState = todoReducer(initialState, action);

		expect(newState[0]?.done).toBeTruthy()
	});
});
