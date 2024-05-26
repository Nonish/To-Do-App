/* eslint-disable */
import { useReducer, ReactNode, JSX } from 'react';
import { ToDoListReducer } from '../../reducers';
import { ToDoListActions } from '../../actions';
import { TodoListContext } from '../..';
import initialState from '../../store';

type ToDoListProviderProps = {
   children: ReactNode
}

const ToDoListProvider = ({ children }: ToDoListProviderProps): JSX.Element => {
   const [state, dispatch] = useReducer(initialState, ToDoListReducer);

   const value = {
      todoList: state.todoList,
      addTodoItem: (todoItemLabel: string) => {
         dispatch({
            type: ToDoListActions.ADD_TODO_ITEM,
            todoItemLabel
         });
      },
      removeTodoItem: (todoItemId: number) => {
         dispatch({
            type: ToDoListActions.REMOVE_TODO_ITEM,
            todoItemId
         });
      },
      markAsCompleted: (todoItemId: number) => {
         dispatch({
            type: ToDoListActions.TOGGLE_COMPLETED,
            todoItemId
         });
      },
   };

   return (
      <TodoListContext.Provider value={value}>
         {children}
      </TodoListContext.Provider>
   );
};

export default ToDoListProvider;