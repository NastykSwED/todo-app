import { useState, useContext } from 'react';

import { TodoContext } from '../contexts/TodoContext';

export const TodoAdd = () => {
	const { handleAddTodo } = useContext(TodoContext);

	const [nameInputValue, setNameInputValue] = useState('');
	const [descriptionInputValue, setDescriptionInputValue] = useState('');

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { target } = e;
		const newNameInputValue = target.value;

		setNameInputValue(newNameInputValue);
	};

	const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { target } = e;
		const newDescriptionInputValue = target.value;

		setDescriptionInputValue(newDescriptionInputValue);
	};

	return (
		<div className='re-TodoAdd'>
			<div className='re-TodoAdd-wrapInputs'>
				<label className='re-TodoAdd-label' htmlFor=''>
					Name
					<input
						placeholder='Todo Name'
						className='re-TodoAdd-input'
						value={nameInputValue}
						onChange={handleChangeName}
						type='text'
					/>
				</label>

				<label className='re-TodoAdd-label' htmlFor=''>
					Description
					<input
						placeholder='Todo Description'
						className='re-TodoAdd-input'
						value={descriptionInputValue}
						onChange={handleChangeDescription}
						type='text'
					/>
				</label>
			</div>

			<button
				onClick={() => {
					handleAddTodo(nameInputValue, descriptionInputValue);

					setNameInputValue('');
					setDescriptionInputValue('');
				}}
				className='re-TodoAdd-button'
			>
				Add Todo
			</button>
		</div>
	);
};
