import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoForm, TodoList } from 'src/containers';
import { ADD_TODO } from 'src/redux/actions';
import { RootState } from 'src/redux/store';
import { TodoBox } from 'src/components';

export const TodoPanel: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      <TodoBox>
        <TodoForm
          addTodo={(todo: string) => dispatch({ type: ADD_TODO, todo })}
        />
        <TodoList todos={todos} />
      </TodoBox>
    </>
  );
};

/* 
    <TodoBox>
      <TodoForm
        addTodo={(todo: string) => dispatch({ type: ADD_TODO, todo })}
      />
      <TodoList todos={todos} />
    </TodoBox>
*/
