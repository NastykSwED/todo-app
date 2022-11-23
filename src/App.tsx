import { Toaster } from 'react-hot-toast';

import { TodoList, TodoAdd, TodoTitle } from './components/';

import { TodoProvider } from './contexts/TodoProvider';

const App = () => {
	return (
		<div className='re-TodoApp'>
			<TodoTitle />
			<TodoProvider>
				<TodoAdd />
				<TodoList />
			</TodoProvider>

			<Toaster position='bottom-right' reverseOrder={false} />
		</div>
	);
};

export default App;
