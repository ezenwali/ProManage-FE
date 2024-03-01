import { useEffect, useRef, useState } from 'react';

export const useCounter = () => {
  const intialValue = useRef(60);
  const [counter, setCounter] = useState(0);

  /**
   * Take the increment value and increment the counter by the value
   * @param value
   */
  const setCount = (value: number) => {
    intialValue.current = intialValue.current + value / 2;
    setCounter(intialValue.current);
  };

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (counter > 0) {
      timer = setTimeout(() => {
        setCounter(counter => counter - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [counter]);

  return { counter, setCount };
};
