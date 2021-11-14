import { ADD_TODO, TodoAction } from './actions';

export const todos = (
  state: string[] = [],
  { type, todo }: TodoAction
): string[] => {
  switch (type) {
    case ADD_TODO:
      return [todo, ...state];
    default:
      return state;
  }
};
