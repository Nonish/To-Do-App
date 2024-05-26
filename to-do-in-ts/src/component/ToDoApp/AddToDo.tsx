import { useContext, useState, JSX } from 'react';
import toast from 'react-hot-toast';
import { TodoListContext } from '../../context';
import TextField from '../TextField';
import TextFieldButton from '../TextFieldButton';
import './ToDoApp.scss'

const AddTodo = (): JSX.Element => {
   const [inputValue, setInputValue] = useState<string | number>('');
   const { addTodoItem } = useContext<any>(TodoListContext);

   const onHandleAdd = (): string | undefined => {
      if (!inputValue) return toast.error('Value can\'t be empty !!!');
      setInputValue('');
      addTodoItem(inputValue);
   }

   return (
      <div className="upper-wrapper">
         <TextField
            type="text"
            value={inputValue}
            placeholder={'Type and add todo item...'}
            onChange={(e) => setInputValue(e.target.value)}
         />
         <TextFieldButton className={'add-btn'} onClick={onHandleAdd}>
            Add
         </TextFieldButton>
      </div>
   );
};

export default AddTodo;
