import { useRef } from 'react';

const useScrollMove = (element: HTMLElement | any) => {
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { onMoveToElement };
};

export default useScrollMove;
