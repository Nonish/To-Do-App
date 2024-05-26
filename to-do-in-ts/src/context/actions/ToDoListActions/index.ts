
type ToDoListActionsType = {
   ADD_TODO_ITEM: string;
   REMOVE_TODO_ITEM: string;
   TOGGLE_COMPLETED: string;
}

const ToDoListActions: ToDoListActionsType = {
   ADD_TODO_ITEM: 'ADD_TODO_ITEM',
   REMOVE_TODO_ITEM: 'REMOVE_TODO_ITEM',
   TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
};

export default ToDoListActions;