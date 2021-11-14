import { Meta, Story } from '@storybook/react';
import React from 'react';
import { TodoList } from './TodoList';

export default {
  title: 'Container/TodoList',
  component: TodoList,
} as Meta;

const Template: Story<{ todos: string[] }> = (args) => <TodoList {...args} />;

export const TodoListStory = Template.bind({});
TodoListStory.args = {
  todos: [],
};
