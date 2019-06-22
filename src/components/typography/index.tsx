import * as React from 'react';
import styled from 'styled-components';

export type TypographyProps = {
  onChange: (value: string) => void;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  content: string;
}

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export function Typography(props: TypographyProps): JSX.Element {
  if (props.onChange) {
    return <StyledInput value={props.content} onChange={(e) => props.onChange(e.target.value)} />
  }
  return (
    <props.type>{props.content}</props.type>
  );
}

Typography.defaultProps = {
  type: 'p'
} as TypographyProps;
