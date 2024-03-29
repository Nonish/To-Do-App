/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import { useContext } from "react";
import TextFieldButton from "../TextFieldButton"
import { TodoListContext } from "../../context";
import toast from "react-hot-toast";

const ToDoCard = ({ data }) => {
   const { label, id, completed } = data;
   const { removeTodoItem, markAsCompleted } = useContext(TodoListContext);

   // ::: useContext(TodoListContext):::
   // addTodoItem: function addTodoItem(todoItemLabel)​
   // markAsCompleted: function markAsCompleted(todoItemId)​
   // removeTodoItem: function removeTodoItem(todoItemId)​
   // todoList: Array []

   const onHandleChange = (type, id) => {
      if (type === "delete") {
         removeTodoItem(id)
         return toast.success("Item deleted successfully !!!")
      } else {
         markAsCompleted(id)
         return toast.success("Item completed successfully !!!")
      }
   }

   return (
      <div className="card">
         <div className="upper-card">
            {/* <TextFieldButton className="edit-btn">&#9998;</TextFieldButton> */}
            <TextFieldButton
               onClick={() => onHandleChange("complete", id)}
               className="check-btn">
               {/* {completed ? <>&#10068;</> : <>&#10004;</>} */}
               {completed ? "Undone" : "Done"}
            </TextFieldButton>
            <TextFieldButton
               onClick={() => onHandleChange("delete", id)}
               className="remove-btn">
               &#10006;
            </TextFieldButton>
         </div>
         <div className={`lower-card ${completed ? "checked" : ""}`}>
            <p>{label}</p>
         </div>
      </div>
   )
}

export default ToDoCard;