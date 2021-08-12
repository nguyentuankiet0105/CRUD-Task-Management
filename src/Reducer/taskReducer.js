import { createSlice } from '@reduxjs/toolkit';

export const taskReducer = createSlice({
  name: 'task',
  initialState: {
    listTask: [
      {
        title: 'demo',
        description: 'demo des',
        deadline: new Date(),
        status: 'new',
      },
    ],
  },
  reducers: {
    addNewTask: (state, action) => {
      console.log('state, action', state, action);
      state.listTask.push(action.payload);
    },
    reset: (state, action) => {
      state.listTask = [];
    },
  },
});
export const { addNewTask, reset } = taskReducer.actions;

export default taskReducer.reducer;
