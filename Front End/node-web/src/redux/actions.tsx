export const ADD_TODO = 'ADD_TODO';

export interface TodoAction {
  type: string;
  todo: string;
}

export const addTodo = (todo: string): TodoAction => ({ type: ADD_TODO, todo });
