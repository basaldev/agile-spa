import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '../typography';

export type Comment = {
  username: string;
  content: string;
}

export type CommentListProps = {
  comments: Comment[];
};

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  border-spacing: 0;
`;

const StyledRow = styled.tr`
  display: block;
  border-top: 1px solid #ccc;
`;

const Username = styled.th`
  width: 200px;
  padding-left: 10px;
  text-align: left;
`;

const Comment = styled.td`
  text-align: left;
  padding-left: 10px;
  border-left: 1px solid #ccc;
`;

export function CommentList(props: CommentListProps): JSX.Element {
  return (
    <StyledTable>
      {props.comments.map((comment) =>
        <StyledRow>
          <Username>
            <Typography content={comment.username} />
          </Username>
          <Comment>
            <Typography content={comment.content} />
          </Comment>
        </StyledRow>
      )}
    </StyledTable>
  );
}
