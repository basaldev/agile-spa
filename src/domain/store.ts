export type State = {
  username: string,
  comment: string,
  commentList: { username: string; content: string; }[]
}

export type Subscriber = (state: State) => void;

let state = {
  username: 'marty',
  comment: 'test1',
  commentList: [{
    username: 'marty',
    content: 'test2'
  }]
};

let subscribers: Subscriber[] = [];

export function subscribe(subscriber: Subscriber): void {
  subscribers.push(subscriber);
}

export function emit(): void {
  subscribers.forEach(subscriber => subscriber(state));
}

export function getState(): State {
  return state;
}

export function setState(reducer: (oldState: State) => State): State {
  state = reducer(state);
  emit();
  return state;
}