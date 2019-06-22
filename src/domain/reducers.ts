import { setState, State } from './store';

export function updateUsername(username: string): void {
  setState(((state: State) => ({
    ...state,
    username
  })));
}

export function updateComment(comment: string): void {
  setState(((state: State) => ({
    ...state,
    comment
  })));
}

export function updateCommentList(commentList: { username: string; content: string }[]): void {
  setState(((state: State) => ({
    ...state,
    commentList
  })));
}
