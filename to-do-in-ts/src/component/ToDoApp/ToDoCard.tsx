/* eslint-disable no-irregular-whitespace */
import { useContext, JSX } from 'react';
import TextFieldButton from '../TextFieldButton'
import { TodoListContext } from '../../context';
import toast from 'react-hot-toast';
import './ToDoApp.scss'

type ToDoCardProps = {
   data: {
      label: string;
      id: number;
      completed: boolean;
   }
}

const ToDoCard = ({ data }: ToDoCardProps): JSX.Element => {
   const { label, id, completed } = data;
   const { removeTodoItem, markAsCompleted } = useContext<any>(TodoListContext);

   // ::: useContext(TodoListContext):::
   // addTodoItem: function addTodoItem(todoItemLabel)​
   // markAsCompleted: function markAsCompleted(todoItemId)​
   // removeTodoItem: function removeTodoItem(todoItemId)​
   // todoList: Array []

   const onHandleChange = (type: string, id: number): string => {
      if (type === 'delete') {
         removeTodoItem(id)
         return toast.success('Item deleted successfully !!!')
      } else {
         markAsCompleted(id)
         return toast.success('Item completed successfully !!!')
      }
   }

   return (
      <div className="card">
         <div className="upper-card">
            {/* <TextFieldButton className="edit-btn">&#9998;</TextFieldButton> */}
            <TextFieldButton
               onClick={() => onHandleChange('complete', id)}
               className="check-btn">
               {/* {completed ? <>&#10068;</> : <>&#10004;</>} */}
               {completed ? 'Undone' : 'Done'}
            </TextFieldButton>
            <TextFieldButton
               onClick={() => onHandleChange('delete', id)}
               className="remove-btn">
               &#10006;
            </TextFieldButton>
         </div>
         <div className={`lower-card ${completed ? 'checked' : ''}`}>
            <p>{label}</p>
         </div>
      </div>
   )
}

export default ToDoCard;