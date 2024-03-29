/* eslint-disable no-irregular-whitespace */
import { useContext } from "react";
import { TodoListContext } from "../../context";
import ToDoCard from "./ToDoCard";
import './ToDoApp.scss'

const TodoList = () => {
   const { todoList } = useContext(TodoListContext);

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
                  {todoList.slice(0).reverse().map((todoItem) => (
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
