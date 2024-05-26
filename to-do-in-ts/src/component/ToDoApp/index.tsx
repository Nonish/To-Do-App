import { JSX } from 'react';
import AddTodo from './AddToDo';

const ToDoApp = (): JSX.Element => {
   return (
      <section className='container-wrapper'>
         <div className='container'>
            <h1>To Do App :</h1>
            <AddTodo />
            {/* <ToDoListProvider>
               <Toaster position="bottom-center" />
               <TodoList />
            </ToDoListProvider> */}
         </div>
      </section>
   )
}

export default ToDoApp;