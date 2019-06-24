import * as React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  label: string;
  onClick: (event: React.MouseEvent) => void; 
}

const StyledButton = styled.button`
  font-size: 50px;
  color: red;
`;

export function Button(props: ButtonProps): JSX.Element {
  return (
    <StyledButton onClick={props.onClick}>{props.label}</StyledButton>
  );
}
