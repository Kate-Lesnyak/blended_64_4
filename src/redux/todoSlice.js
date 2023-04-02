import { createSlice } from '@reduxjs/toolkit';

const todoInitialState = {
  items: [],
};

const todoSlice = createSlice({
  // Ім'я слайсу
  name: 'todo',
  // Початковий стан редюсера слайсу
  initialState: todoInitialState,
  // Об'єкт редюсерів
  reducers: {
    addTodo(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { addTodo, deleteTodo } = todoSlice.actions;
// Редюсер слайсу
export const todoReducer = todoSlice.reducer;
