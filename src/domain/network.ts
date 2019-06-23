const endpoint = 'http://localhost:3000';

export function getComments(): Promise<{ username: string; content: string}[]> {
  return fetch(`${endpoint}/comments`)
    .then(res => res.json());
}

export function sendComment(data: { username: string, content: string }): Promise<any> {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  return fetch(`${endpoint}/comments`, options);
}