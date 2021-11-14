import { Meta, Story } from '@storybook/react';
import React from 'react';
import { AddTodoFn, TodoForm } from './TodoForm';

export default {
  title: 'Container/TodoForm',
  component: TodoForm,
} as Meta;

const Template: Story<{ addTodo: AddTodoFn }> = (args) => (
  <TodoForm {...args} />
);

export const TodoFormStory = Template.bind({});
TodoFormStory.args = {
  addTodo: (todo: string) => console.log(todo),
};
