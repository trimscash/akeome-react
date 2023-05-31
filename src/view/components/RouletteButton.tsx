import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { increment } from '../../stores/counterSlice';
import { shffule } from '../../stores/roulleterSlice';

function RouletteButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(shffule());
    dispatch(increment());
    return;
  }

  return <Button value="ルーレット！" onClick={() => handleClick()} />;
}

export default RouletteButton;
