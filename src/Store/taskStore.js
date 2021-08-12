import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../Reducer/taskReducer'
export default configureStore({
  reducer: {
    task: taskReducer,
  }
})