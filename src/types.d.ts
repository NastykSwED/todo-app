interface actionProps {
	type: string;
	payload: TodoProps;
}

interface TodoProps {
	id: number;
	name: string;
	description: string;
	done: boolean;
}

interface TodoContextProps {
	todos: TodoProps[];
	handleAddTodo: (todoName: string, todoDescription: string) => void;
	handleDeleteTodo: (todo: TodoProps) => void;
	handleUpdateTodo: (todo: TodoProps) => void;
}
