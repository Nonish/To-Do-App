/* eslint-disable no-irregular-whitespace */
import { useContext, JSX } from 'react';
import { TodoListContext } from '../../context';
import ToDoCard from './ToDoCard';
import './ToDoApp.scss'

type ToDoCardProps = {
   label: string;
   id: number;
   completed: boolean;
}

const TodoList = (): JSX.Element => {
   const { todoList } = useContext<any>(TodoListContext);

   // ::: useContext(TodoListContext):::
   // addTodoItem: function addTodoItem(todoItemLabel)​
   // markAsCompleted: function markAsCompleted(todoItemId)​
   // removeTodoItem: function removeTodoItem(todoItemId)​
   // todoList: Array []

   return (
      <div className="lower-wrapper">
         {
            todoList.length ?
               <div className="card-wrapper">
                  {todoList
                     .slice(0)
                     .reverse()
                     .map(
                        (todoItem: ToDoCardProps) => (
                           <ToDoCard
                              data={todoItem}
                              key={todoItem?.id}
                           />))}
               </div>
               :
               <h2>Add to-do item to see here...</h2>
         }
      </div>
   );
};

export default TodoList;
