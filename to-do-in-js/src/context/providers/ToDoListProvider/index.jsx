import { useReducer } from "react";
import { ToDoListReducer } from "../../reducers";
import { ToDoListActions } from "../../actions";
import { TodoListContext } from "../..";
import initialState from "../../store";

// eslint-disable-next-line react/prop-types
const ToDoListProvider = ({ children }) => {
   const [state, dispatch] = useReducer(ToDoListReducer, initialState);

   const value = {
      todoList: state.todoList,
      addTodoItem: (todoItemLabel) => {
         dispatch({ type: ToDoListActions.ADD_TODO_ITEM, todoItemLabel });
      },
      removeTodoItem: (todoItemId) => {
         dispatch({ type: ToDoListActions.REMOVE_TODO_ITEM, todoItemId });
      },
      markAsCompleted: (todoItemId) => {
         dispatch({ type: ToDoListActions.TOGGLE_COMPLETED, todoItemId });
      },
   };

   return (
      <TodoListContext.Provider value={value}>
         {children}
      </TodoListContext.Provider>
   );
};

export default ToDoListProvider;