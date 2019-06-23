import * as React from 'react';
import { Typography } from 'components/typography';
import { CommentList } from 'components/commentList';
import { Button } from 'components/button';
import { onChangeUsername, onChangeComment, onSubmitComment } from 'domain/middleware';

export type AppProps = {
  state: {
    username: string;
    comment: string;
    commentList: { username: string; content: string }[];
  }
}

export function App({ state }: AppProps): any {
  return (
    <div>
      <Typography type="h1" content="Agile SPA" />
      <Typography type="h3" content="Name" />
      <Typography content={state.username} onChange={onChangeUsername} />
      <Typography type="h3" content="Comment" />
      <Typography content={state.comment} onChange={onChangeComment} />
      <br />
      <Button label="Submit" onClick={onSubmitComment} />
      <br />
      <br />
      <CommentList comments={state.commentList} />
    </div>
  );
}
