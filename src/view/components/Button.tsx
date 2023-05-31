import React from 'react';

type ButtonPropType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
};

function Button(props: ButtonPropType) {
  return <button onClick={props.onClick}>{props.value}</button>;
}

export default Button;
