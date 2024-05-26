import { ToDoListActions } from '../../actions';

type ReducerParams = {
	state: {
		todoList: {
			id: number;
			completed: boolean;
		}[]
	};
	action: {
		type: string;
		todoItemId: number;
		todoItemLabel: string;
	};
};

const ToDoListReducer = ({ state, action }: ReducerParams): {} => {
	switch (action.type) {
		case ToDoListActions.ADD_TODO_ITEM:
			return {
				todoList: [
					...state.todoList,
					{
						id: new Date().valueOf(),
						label: action.todoItemLabel,
						completed: false,
					},
				],
			};
		case ToDoListActions.REMOVE_TODO_ITEM: {
			const filteredTodoItem = state.todoList.filter(
				(todoItem) => todoItem.id !== action.todoItemId
			);
			return { todoList: filteredTodoItem };
		}
		case ToDoListActions.TOGGLE_COMPLETED: {
			const updatedTodoList = state.todoList.map((todoItem) =>
				todoItem.id === action.todoItemId
					? { ...todoItem, completed: !todoItem.completed }
					: todoItem
			);
			return { todoList: updatedTodoList };
		}
		default:
			return state;
	}
};

export default ToDoListReducer;
