import { Toaster } from 'react-hot-toast'
import ToDoListProvider from '../../context/providers/ToDoListProvider'
import AddTodo from './AddToDo'
import TodoList from './ToDoList'

const ToDoApp = () => {
   return (
      <section className='container-wrapper'>
         <div className='container'>
            <h1>To Do App :</h1>
            <ToDoListProvider>
               <Toaster position="bottom-center" />
               <AddTodo />
               <TodoList />
            </ToDoListProvider>
         </div>
      </section>
   )
}

export default ToDoApp;