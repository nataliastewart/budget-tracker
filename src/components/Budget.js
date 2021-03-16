import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget.js';
import EditBudget from './EditBudget.js';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = value => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;
