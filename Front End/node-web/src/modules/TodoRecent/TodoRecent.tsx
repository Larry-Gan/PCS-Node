import React from 'react';
import { useSelector } from 'react-redux';
import { Col, HeaderLg, Row, TodoBox, TodoPart } from 'src/components';
import { RootState } from 'src/redux/store';

export const TodoRecent: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <TodoBox>
      <Row>
        <Col>
          <HeaderLg color="black" underline="secondary">
            Remember to...
          </HeaderLg>
        </Col>
      </Row>
      <Row>
        <TodoPart style={{ fontSize: '2.5em' }} center border bold>
          {todos.length > 0 ? todos[0] : 'Make a TODO!'}
        </TodoPart>
      </Row>
      <button>Hello There...</button>
    </TodoBox>
  );
};
