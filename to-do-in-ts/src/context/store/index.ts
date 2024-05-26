type InitialState = {
   todoList: {
      id: number;
      completed: boolean;
   }[]
}

const initialState: InitialState = {
   todoList: [],
};

export default initialState;
