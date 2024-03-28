/* eslint-disable no-irregular-whitespace */
import { useContext } from "react";
import { TodoListContext } from "../../context";
import TextFieldButton from "../TextFieldButton";
import './ToDoApp.scss'

const TodoList = () => {
   const { todoList, removeTodoItem, markAsCompleted } = useContext(TodoListContext);

   // ::: useContext(TodoListContext):::
   // addTodoItem: function addTodoItem(todoItemLabel)​
   // markAsCompleted: function markAsCompleted(todoItemId)​
   // removeTodoItem: function removeTodoItem(todoItemId)​
   // todoList: Array []

   return (
      <div className="lower-wrapper">
         {todoList.length ? <ul>
            {todoList.map((todoItem) => (
               <li
                  className={`todoItem ${todoItem.completed ? "completed" : ""}`}
                  key={todoItem.id}
                  onClick={() => markAsCompleted(todoItem.id)}
               >
                  {todoItem.label}
                  <TextFieldButton className="remove-btn" onClick={() => removeTodoItem(todoItem.id)}>
                     &#10006;
                  </TextFieldButton>

                  {/* <button
                     className="delete"
                     onClick={() => removeTodoItem(todoItem.id)}
                  >

                  </button> */}
               </li>
            ))}
         </ul>
            :
            <h2>No Data</h2>
         }
      </div>
   );
};

export default TodoList;
