export const todoTypes = {
	AddTodo: 'AddTodo',
	DeleteTodo: 'DeleteTodo',
	UpdateTodo: 'UpdateTodo',
};

export const initialTodoState: TodoProps[] = [];

export const init = (initialTodoState: TodoProps[]) => {
	return JSON.parse(localStorage.getItem('todos') || '[]') || initialTodoState;
};

export const todoReducer = (state: TodoProps[], action: actionProps) => {
	switch (action.type) {
		case todoTypes.AddTodo: {
			const newTodo = action.payload;

			if (newTodo.name) {
				return [...state, action.payload];
			}
			return state;
		}

		case todoTypes.DeleteTodo: {
			const deleteTodo = action.payload;

			return state.filter(todo => (todo.id !== deleteTodo.id ? todo : null));
		}

		case todoTypes.UpdateTodo: {
			const updateTodo = action.payload;

			return state.map(todo =>
				todo.id === updateTodo.id ? { ...todo, done: !todo.done } : todo
			);
		}

		default:
			return state;
	}
};
