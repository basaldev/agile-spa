import { getState } from './store';
import { updateUsername, updateComment, updateCommentList } from './reducers';
import { getComments, sendComment } from './network';

export function onInit(): void {
  getComments().then(comments => {
    updateCommentList(comments);
  });
}

export function onChangeUsername(username: string): void {
  updateUsername(username);
}

export function onChangeComment(comment: string): void {
  updateComment(comment);
}

export function onSubmitComment(): void {
  const state = getState();
  const comment = { username: state.username, content: state.comment };
  updateCommentList([...state.commentList, comment]);
  updateComment('');
  sendComment(comment)
    .then(() => getComments())
    .then(comments => {
      updateCommentList(comments);
    });
}
