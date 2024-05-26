/* eslint-disable indent */
import { createContext } from 'react';

type TodoListContextType = {
   addTodoItem: (todoItemLabel: string) => void;
   markAsCompleted: (todoItemId: number) => void;
   removeTodoItem: (todoItemId: number) => void;
   todoList: {
      id: number,
      label: string,
      completed: boolean,
   }[];
}

const TodoListContext = createContext<TodoListContextType | {}>({
   addTodoItem: () => { },
   markAsCompleted: () => { },
   removeTodoItem: () => { },
   todoList: []
});

export {
   TodoListContext
}

// ::: useContext(TodoListContext):::
// addTodoItem: function addTodoItem(todoItemLabel)
// markAsCompleted: function markAsCompleted(todoItemId)
// removeTodoItem: function removeTodoItem(todoItemId)
// todoList: Array []