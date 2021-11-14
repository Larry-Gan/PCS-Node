import React from 'react';
import { Button, Col, Row, TodoPart } from 'src/components';
import { usePagination } from 'src/hooks';

export const TodoList: React.FC<{ todos: string[] }> = ({ todos }) => {
  const numPages = 5;
  const [todoPage, next, prev, page] = usePagination(numPages, todos);

  return (
    <>
      <div style={{ minHeight: `${numPages * 3}em` }}>
        {todoPage.map((todo: string, index: number) => (
          <Row key={index}>
            <TodoPart size={{ lg: 1, md: 2, xs: 2 }} bold center>
              {numPages * (page - 1) + index + 1}
            </TodoPart>
            <TodoPart size={{ lg: 11, md: 10, xs: 10 }} border>
              {todo}
            </TodoPart>
          </Row>
        ))}
      </div>
      <Row>
        <Col size={{ xs: 6 }}>
          <Button disabled={prev == null} onClick={() => prev && prev()}>
            {'< '}prev
          </Button>
        </Col>
        <Col size={{ xs: 6 }}>
          <Button disabled={next == null} onClick={() => next && next()}>
            next{' >'}
          </Button>
        </Col>
      </Row>
    </>
  );
};
