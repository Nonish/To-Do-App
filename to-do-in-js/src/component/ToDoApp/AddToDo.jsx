/* eslint-disable no-irregular-whitespace */
import { useContext, useState } from "react";
import { TodoListContext } from "../../context";
import TextField from "../TextField";
import TextFieldButton from "../TextFieldButton";
import './ToDoApp.scss'

const AddTodo = () => {
   const [inputValue, setInputValue] = useState("");
   const { addTodoItem } = useContext(TodoListContext);

   // ::: useContext(TodoListContext):::
   // addTodoItem: function addTodoItem(todoItemLabel)​
   // markAsCompleted: function markAsCompleted(todoItemId)​
   // removeTodoItem: function removeTodoItem(todoItemId)​
   // todoList: Array []

   const onHandleAdd = () => {
      if (!inputValue) return alert("Value can't be empty !!!")
      addTodoItem(inputValue);
      setInputValue("");
   }

   return (
      <div className="upper-wrapper">
         <TextField
            type="text"
            value={inputValue}
            placeholder={"Type and add todo item"}
            onChange={(e) => setInputValue(e.target.value)}
         />
         <TextFieldButton className={'add-btn'} onClick={onHandleAdd}>
            Add
         </TextFieldButton>
      </div>
   );
};

export default AddTodo;
